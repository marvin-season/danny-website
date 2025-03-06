import { ReactNode, useRef, useState } from "react";
import { IStrategy } from "./index";

type Modal = {
    id: number;
    type?: "primary";
    render: () => ReactNode;
    className?: string;
};

// 提取 useInitState 方法的类型
type StateType = ReturnType<typeof useInitState>;
type ActionType = ReturnType<typeof useAction>;

function useAction(state: StateType) {
    return {
        open: async (render: () => ReactNode) => {
            state.idRef.current++;
            state.setModals((prev) => {
                // async code
                return prev.concat({ id: state.idRef.current, render });
            });
            return state.idRef.current
        },
        close: (id: number) => {
            state.setModals((prev) => prev.filter((item) => item.id !== id));
        },
    };
}

function useInitState() {
    const idRef = useRef(0);
    const [modals, setModals] = useState<Modal[]>([]);
    return {
        idRef,
        modals,
        setModals,
    };
}

function NotificationUI(props: StateType & ActionType): ReactNode {
    return props?.modals.map((modal, index) => {
        return (
            <div
                key={modal.id}
                className={`${modal.className} fixed w-[500px] min-h-[200px] translate-x-[-250px] translate-y-[-100px] left-[50%] top-[50%] 
                bg-[#ffe] rounded-2xl shadow-2xl p-4 flex flex-col justify-between`}
            >
                <div className={"text-lg font-bold"}>这是标题</div>
                <div className={"flex-1"}>{modal.render()}</div>
                <div className={"flex justify-end gap-2"}>
                    <button>取消</button>
                    <button>确认</button>
                </div>
            </div>
        );
    });
}

const NotificationStrategy: IStrategy = {
    name: "modal",
    description: "Modal desc",
    useAction,
    useInitState,
    useUI(state: StateType, action: ActionType) {
        return <NotificationUI {...state} {...action} />;
    },
};

export default NotificationStrategy;
