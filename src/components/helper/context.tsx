import {
    createContext,
    ReactNode,
    useContext,
    useState,
} from "react";
import { IStrategy, Strategy, useStrategies } from "./strategy";

export type ContextProps = {
    [name in IStrategy["name"]]: ReturnType<IStrategy["useAction"]>;
};

export default function HelperProvider({ children }: { children: ReactNode }) {
    const strategies = useStrategies();
    const [actionContext, setActionContext] = useState<ContextProps>(
        {} as ContextProps,
    );

    return (
        <HelperContext.Provider value={actionContext}>
            {strategies.map((item) => {
                return (
                    <Strategy
                        key={item.name}
                        {...item}
                        setActionContext={setActionContext}
                    />
                );
            })}
            {children}
        </HelperContext.Provider>
    );
}

export const HelperContext = createContext<ContextProps>({} as ContextProps);

export function useHelper() {
    return useContext(HelperContext);
}
