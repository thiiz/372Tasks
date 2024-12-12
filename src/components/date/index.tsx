export const DateComponent = () => {
    const today = new Date();

    const weekday = new Intl.DateTimeFormat("pt-BR", { weekday: "long" }).format(today);
    const date = new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    }).format(today);

    return (
        <div className="text-xs sm:text-base flex flex-col px-1">
            <span className="font-bold capitalize leading-5 tracking-wide">
                {weekday}
            </span>
            <span className="font-semibold text-theme-secondary leading-3 sm:leading-5">
                {date}
            </span>
        </div>
    )
};