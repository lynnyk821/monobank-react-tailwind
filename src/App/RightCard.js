function RightCard() {
    const border = "border-[1px] border-[#ccc] border-solid}"
    const flexClasses = "flex items-center justify-center";

    const smallButtonMoneyStyles = `w-24 h-10 ${border} rounded-2xl text-sm font-medium border-gray-300 
                                           hover:bg-gray-300 hover:bg-opacity-50`;

    const fieldContainerStyles = `w-5/6 h-14 ${flexClasses} mb-4`;
    const inputUserFieldStyles = `w-full h-full ${border} p-4 rounded-2xl text-lg`;

    const buttonUserFieldStyles = `w-full h-full p-4 rounded-xl ${flexClasses} bg-black
                                          hover:bg-opacity-75`;

    return (
        <main className="w-1/2 h-full flex items-center flex-col">
            <div className="w-4/5 h-60 mt-12 p-1 rounded-3xl gradient-bg-2">
                <div className="w-full h-full p-3 flex items-center flex-col rounded-3xl bg-white">
                    {/*Header donation*/}
                    <div className={`w-full h-1/6 gap-2 ${flexClasses}`}>
                        <p className="font-medium">Сума поповнення</p>
                        <img className="w-4 h-4" src="https://send.monobank.ua/img/money.png" alt=""/>
                    </div>
                    {/*Body donation*/}
                    <div className={`w-full h-3/6 pt-2 ${flexClasses} gap-2 font-bold text-opacity-[0.6] text-[#808080]`}>
                        <div className="outline-0 text-5xl" contentEditable="true" id="money_input">0</div>
                        <div className="text-5xl">₴</div>
                    </div>
                    {/*Footer donation*/}
                    <div className={`w-full h-2/6 gap-3 ${flexClasses}`}>
                        <button className={`${smallButtonMoneyStyles}`}>+100&nbsp;₴</button>
                        <button className={`${smallButtonMoneyStyles}`} id="button_500">+500&nbsp;₴</button>
                        <button className={`${smallButtonMoneyStyles}`} id="button_1000">+1&nbsp;000&nbsp;₴</button>
                    </div>
                </div>
            </div>

            <div className="w-full h-4/6 flex items-center flex-col">
                <div className={`w-5/6 h-full flex items-center text-center flex-col bg-white`}>
                    <div className={`${fieldContainerStyles} mt-8`}>
                        <input className={`${inputUserFieldStyles}`} id="name_input" placeholder="Ваше ім'я (необов'язково)"/>
                    </div>
                    <div className={`${fieldContainerStyles}`}>
                        <input className={`${inputUserFieldStyles}`} id="comment_input" placeholder="Ваш коментар (необов'язково)"/>
                    </div>
                    <div className={`${fieldContainerStyles}`}>
                        <button className={`${buttonUserFieldStyles}`} id="monoPay">
                            <img className="w-26 h-6" src="https://send.monobank.ua/img/mono_pay.svg" alt="mono Pay"/>
                        </button>
                    </div>
                    <div className={`${fieldContainerStyles}`}>
                        <button className={`${buttonUserFieldStyles}`} id="googlePay">
                            <img className="w-16 h-6" src="https://www.gstatic.com/instantbuy/svg/dark_gpay.svg" alt="google Pay"/>
                        </button>
                    </div>
                    <div className={`w-5/6 border-[1px] mt-3`}></div>
                </div>

                <div className="w-2/5 h-full mt-3 flex justify-center">
                    <button className={`w-11/12 h-1/3 gap-2 ${flexClasses} cursor-pointer text-[#e85e5b] text-sm font-bold`}>
                        <img className="w-4 h-6" src="https://send.monobank.ua/img/card.svg" alt="google Pay"/>
                        Оплатити карткою
                    </button>
                </div>
            </div>
        </main>
    );
}
export default RightCard;