const FooterHolder = () => {
    const widgetButtonStyles = "text-[14px] font-bold leading-6 rounded-2xl p-2 border-[1px] gap-1 " +
                                      "flex items-center justify-center hover:bg-white hover:bg-opacity-20";
    return (
        <main className="w-[990px] h-12 font-medium text-opacity-[0.8] text-[#ffffff] flex leading-4 m-4">
            <div className="w-1/2 text-[12px]">
                JSC "UNIVERSAL BANK" License of the NBU №92 dated January 20, 1994,<br/>
                Number in the State Register of Banks № 226
            </div>
            <div className="w-1/2 gap-3 flex items-center justify-end">
                <button className={`${widgetButtonStyles}`}>
                    <img src="https://send.monobank.ua/img/cup.svg" alt = ""/>
                    <div className="widget-button-icon-text">Провести розіграш</div>
                </button>
                <button className={`${widgetButtonStyles}`}>
                    <img src="https://send.monobank.ua/img/cup.svg" alt = ""/>
                    <div className="widget-button-icon-text">Віджет для стрімів</div>
                </button>
            </div>
        </main>
    );
}
export default FooterHolder;