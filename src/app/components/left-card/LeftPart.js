function LeftPart() {
    const flexClasses = "flex items-center justify-center";
    const LeftCardContainer = ({children}) => {
        return (
            <main className="w-1/2 h-full flex flex-col bg-gray-200 bg-opacity-[0.3]">{children}</main>
        );
    }
    const JarLogo = () => {
        return (
            <div className={`w-full h-1/6 ${flexClasses}`}>
                <img className="w-25 h-4 monobank-logo" src="https://send.monobank.ua/img/logo_short.png" alt=""/>
            </div>
        );
    }
    const JarBody = () => {
        return (
            <div className="w-full h-5/6">
                <div className={`w-full h-52 ${flexClasses} flex-col`}>
                    <img className="w-52 h-52 absolute" src="https://send.monobank.ua/img/jar_bg.png" alt=""/>
                    <img className="w-35 h-48 relative" src="https://send.monobank.ua/img/jar/uah_50.png" alt=""/>
                </div>

                <div className={`w-full h-56 mt-2 ${flexClasses} flex-col text-center text-sm font-medium leading-8`}>
                    <p>Артем К. збирає</p>
                    <p className="mb-2 text-xl font-bold">На ремонт медеваку</p>
                    <div className="leading-9">
                        <p className="leading-5">Збираємо на ремонт медеваку для<br/>4ОТБР танкова бригада</p>
                        <p>Ремонтуємо 2 автівки - Тойоту та Нісан.</p>
                        <p>У бригаді є наші земляки з Черкащини!</p>
                        <p>Ремонт авто треба на вчора! Прохання підтримати!</p>
                    </div>
                </div>

                <div className={`w-full h-1/6 gap-1 ${flexClasses}`}>
                    <div className={`w-3/5 h-14 ${flexClasses} text-sm rounded-2xl bg-white`}>
                        <div className={`w-1/2 h-2/3 pl-3 flex items-center gap-3 border-r-[1px] border-opacity-[0.4] border-[#808080]`}>
                            <img className="w-6 h-6" src="https://send.monobank.ua/img/collected.svg" alt=""/>
                            <div className="stats-text">
                                <p className="text-[#808080]">Накопичено</p>
                                <p className="font-medium">7&nbsp;700&nbsp;₴</p>
                            </div>
                        </div>

                        <div className={`w-1/2 h-full pl-3 flex items-center gap-3`}>
                            <img className="w-6 h-6" src="https://send.monobank.ua/img/target.svg" alt=""/>
                            <div className="stats-text">
                                <p className="text-[#808080]">Ціль</p>
                                <p className="font-medium">25&nbsp;000&nbsp;₴</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <LeftCardContainer>
            <JarLogo></JarLogo>
            <JarBody></JarBody>
        </LeftCardContainer>
    );
}

export default LeftPart;

