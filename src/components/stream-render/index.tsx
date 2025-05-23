import { Fragment, FunctionComponent, useState } from "react";

import s from "./s";
import useIntersectionObserver from "@site/src/hooks/use-intersection-observer";
import useIncreasingRender, {
    PromiseState,
} from "@site/src/hooks/use-increasing-render";

export default function StreamRender() {
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const { promiseRef, consume, start, cancel } = useIncreasingRender({
        onContinue(value) {
            setContent((prev) => prev + value);
        },
    });
    const handleStart = async () => {
        if (loading) return;
        setLoading(true);
        start();
        for (const char of s) {
            const hasCanceled = await consume(char);
            if (hasCanceled) {
                break;
            }
        }
        setLoading(false);
    };

    const { targetRef, rootRef } = useIntersectionObserver<
        HTMLDivElement,
        HTMLDivElement
    >({
        rootOptions: {
            rootMargin: "50%",
        },
        onIntersecting(entries) {
            typeof promiseRef.current === "function" &&
                promiseRef.current(entries[0].target);
            promiseRef.current = PromiseState.Resume;
        },
        onDisIntersecting(entries) {
            promiseRef.current = PromiseState.Suspense;
        },
    });

    // const contentObject = parseThinkContent(content);
    return (
        <>
            <button className={"border px-2"} onClick={handleStart}>
                start
            </button>
            <button
                className={"border px-2"}
                onClick={() => {
                    setContent("");
                    setLoading(false);
                    cancel();
                }}
            >
                reset
            </button>
            <div className={"text-gray-600 text-sm"}>
                <em>Note: 打开控制台检查正在输出的元素</em>
                <br />
                <em>Full String:</em>
                <div className={"h-[150px] overflow-y-scroll border"}>{s}</div>
            </div>
            <div
                ref={rootRef}
                className={
                    "h-[200px] w-[300px] overflow-y-scroll border rounded text-gray-600 p-4"
                }
            >
                {/*<div className={"text-sm text-gray-500"}>{contentObject.think_content}</div>*/}
                {content.split(/(?=[?,.!])/g)?.map((item, index) => {
                    return <Fragment key={index}>{item}</Fragment>;
                })}
                <div ref={targetRef}></div>
            </div>
        </>
    );
}
