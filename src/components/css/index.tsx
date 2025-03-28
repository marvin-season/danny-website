export function AutoWrap() {
    return (
        <>
            <div className={"flex justify-between w-1/3 flex-wrap border"}>
                <div className={"min-h-[24px] flex-1 border max-w-[100%]"}>
                    <div contentEditable={true} className={"w-auto"}></div>
                </div>
                <div className={"flex ml-auto"}>
                    <div>@</div>
                    <div>#</div>
                </div>
            </div>
        </>
    );
}
