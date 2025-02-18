import { EditorProviderProps, JSONContent, useCurrentEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import InlinePlaceholder from './inline-placeholder'
import { deserialize, serialize } from './utils'
import Tippy from '@tippyjs/react'
import { MentionExtension } from './mention'

export const useEditorProps = ({ content, setTriggerKey }: { content: string | JSONContent, setTriggerKey: (key: string) => void }) => {
    return {
        editorContainerProps: {
            className: 'w-full',
        },
        autofocus: true,
        extensions: [
            StarterKit.configure({
                history: false,
            }),
            InlinePlaceholder,
            MentionExtension.configure({
                onMentionKeyPress: (key: string) => {
                    setTriggerKey(key)
                }
            })
        ],
        content,
        editorProps: {
            attributes: {
                class: 'w-full prose-sm focus:outline-none w-3/4 p-10 bg-white shadow rounded-[16px]',
            },
        },
    } as EditorProviderProps
}

const handleSave = (json: JSONContent) => {
    alert(serialize(json))
}

const templateList = [
    "我是{{宫本武藏}},我的工作是 {{吃饭睡觉打拳击}}。",
    "请帮我查询 {{昨天}}的日程"
]
export const Trigger = ({ setTriggerKey, triggerKey }) => {
    const { editor } = useCurrentEditor();
    if (!editor) {
        return null
    }
    return <>
        {/* trigger @ */}
        <Tippy
            delay={100}
            duration={0}
            content={<div className={""}>
                {
                    templateList.map((item, index) => {
                        return <div onClick={() => {
                            editor.commands.setContent(deserialize(item))
                        }} key={index}>{item}</div>
                    })
                }
            </div>}
            interactive
            placement={'top-start'} // 将弹窗位置设置为底部
            visible={triggerKey === '@'}
            onClickOutside={() => setTriggerKey(null)} // 点击外部关闭弹窗
        >
            <div className='cursor-pointer p-4 bg-white w-full rounded-[12px] shadow text-blue-500'>
                <span onClick={() => {
                    setTriggerKey('@')
                }}>
                    {'@'}
                </span>
            </div>

        </Tippy>
    </>
}