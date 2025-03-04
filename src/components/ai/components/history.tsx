import {Message} from "../type";

interface HistoryProps {
    citeMessage?: Message
    onRe: (message: Message) => void;
    onCopy: (message: Message) => void
    onCite: (message: Message) => void
}

export function Historical({citeMessage, isLast, message, onCite, onCopy, onRe}: {
    message: Message;
    isLast: boolean
} & HistoryProps) {
    return <div
        className={`bg-white px-4 py-1.5  ${isLast ? 'border-0' : 'border-b'} cursor-pointer flex gap-2 text-blue-300 text-sm  hover:bg-gray-100`}>
        <span className={"text-gray-500"}>{message.content}</span>
        <span onClick={() => onRe(message)}>re</span>
        <span onClick={() => onCopy(message)}>cp</span>
        <span className={`${citeMessage?.id === message.id && 'text-blue-500'}`}
              onClick={() => onCite(message)}>cite</span>
    </div>
}

export function History({messages, ...restProps}: { messages: Message[], } & HistoryProps) {
    if (!messages.length) {
        return <div className={'text-center text-green-400 text-lg'}>
            空空如也
        </div>
    }
    return messages.map((message, index) => {
        return <Historical key={message.id} {...restProps} message={message} isLast={index === messages.length - 1}/>
    })
}