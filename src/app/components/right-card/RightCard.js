import {useEffect, useRef, useState} from "react";
import {getStringMoneyFormat, getNumber} from "../../commons/commons";
import User from "./user";
import UserList from "./userList";

function RightCard() {
    const flexClasses = "flex items-center justify-center", border = "border-[1px] border-[#ccc] border-solid}"

    const fieldContainerStyles  = `w-5/6 h-14 ${flexClasses} mb-4`,
        inputUserFieldStyles  = `w-full h-full ${border} p-4 rounded-2xl text-lg`;

    const buttonUserFieldStyles= `w-full h-full p-4 rounded-xl ${flexClasses} bg-black hover:bg-opacity-75`;

    const smallButtonMoneyStyles = `w-24 h-10 ${border} rounded-2xl text-sm 
                                       font-medium border-gray-300 hover:bg-[#808080] hover:bg-opacity-25`;

    const maxMoney = 29999;
    let users = new UserList();

    const nameRef = useRef(null),
          commentRef  = useRef(null),
          moneyRef = useRef(null);

    const [inputWidth, setInputWidth] = useState(2);
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const [money, setMoney] = useState(0);

    useEffect(() => {
        if (nameRef.current)
            nameRef.current.focus();
    }, [name]);

    useEffect(() => {
        if (commentRef.current)
            commentRef.current.focus();
    }, [comment]);

    useEffect(() => {
        if (moneyRef.current)
            moneyRef.current.focus();
    }, [money]);

    function updateMoneyInput (money){
        setMoney(getStringMoneyFormat(money));
        setInputWidth(money.toString().length + 1);
    }
    function moneyHandler (money) {
        return money > maxMoney ? updateMoneyInput(maxMoney) : updateMoneyInput(money);
    }

    const moneyButtonHandler = (event) => {
        const buttonValue = getNumber(event.target.value);
        const amount = getNumber(money.toString()) + buttonValue;
        moneyHandler(amount);
    };
    const moneyInputHandler = (event) => {
        const inputValue = getNumber(event.target.value);
        moneyHandler(inputValue);
    }

    const inputNameHandler = (event) => setName(event.target.value);
    const inputCommentHandler = (event) => setComment(event.target.value);

    const buttonHandler = () => {
        const moneyNumber = getNumber(money);
        users.addUser(new User(name, comment, moneyNumber));
        users.printAllUsersInformation();
    }

    const DonationForm = () => {
        const SmallMoneyButton = ({value, onClick}) => {
            return (
                <div className={`w-full h-2/6 gap-3 flex items-center justify-center`}>
                    <button className={`${smallButtonMoneyStyles}`} id="smallButton"
                            value={value} onClick={onClick}>+{value}&nbsp;₴
                    </button>
                </div>
            );
        }
        return (
            <div className="w-4/5 h-60 mt-12 p-1 rounded-3xl gradient-bg-2">
                <div className="w-full h-full p-3 flex items-center flex-col rounded-3xl bg-white">
                    <div className={`w-full h-1/6 gap-2 ${flexClasses}`}>
                        <p className="font-medium">Сума поповнення</p>
                        <img className="w-4 h-4" src="https://send.monobank.ua/img/money.png" alt=""/>
                    </div>
                    <div className={`w-full h-3/6 pt-2 ${flexClasses} font-bold text-opacity-[0.6] text-[#808080]`}>
                        <input className="w-8 text-5xl outline-none text-center" id="moneyInput" ref={moneyRef}
                               value={money}
                               onChange={moneyInputHandler}
                               style = {{width: `${inputWidth}ch`}}
                        />
                        <div className="text-5xl">₴</div>
                    </div>
                    <div className={`w-full h-2/6 gap-3 ${flexClasses}`}>
                        <SmallMoneyButton value={100} onClick={moneyButtonHandler}></SmallMoneyButton>
                        <SmallMoneyButton value={500} onClick={moneyButtonHandler}></SmallMoneyButton>
                        <SmallMoneyButton value={1000} onClick={moneyButtonHandler}></SmallMoneyButton>
                    </div>
                </div>
            </div>
        );
    }
    const PaymentForm = () => {
        const PaymentFormFields = () => {
            return (
                <div className={`w-5/6 h-full flex items-center text-center flex-col bg-white`}>
                    <div className={`${fieldContainerStyles} mt-8`}>
                        <input className={`${inputUserFieldStyles}`} id="nameInput" ref={nameRef}
                               value={name} onChange={inputNameHandler}
                               placeholder="Ваше ім'я (необов'язково)"
                        />
                    </div>
                    <div className={`${fieldContainerStyles}`}>
                        <input className={`${inputUserFieldStyles}`} id="commentInput" ref={commentRef}
                               value={comment} onChange={inputCommentHandler}
                               placeholder="Ваш коментар (необов'язково)"
                        />
                    </div>
                    <div className={`${fieldContainerStyles}`}>
                        <button className={`${buttonUserFieldStyles}`} id="monoPay" onClick={buttonHandler}>
                            <img className="w-26 h-6" src="https://send.monobank.ua/img/mono_pay.svg" alt="mono Pay"/>
                        </button>
                    </div>
                    <div className={`${fieldContainerStyles}`}>
                        <button className={`${buttonUserFieldStyles}`} id="googlePay" onClick={buttonHandler}>
                            <img className="w-16 h-6" src="https://www.gstatic.com/instantbuy/svg/dark_gpay.svg" alt="google Pay"/>
                        </button>
                    </div>
                    <div className={`w-5/6 border-[1px] mt-3`}></div>
                </div>
            );
        }
        const FooterPaymentForm = () => {
            return (
                <div className="w-2/5 h-full mt-3 flex justify-center">
                    <button className={`w-11/12 h-1/3 gap-2 ${flexClasses} cursor-pointer text-[#e85e5b] text-sm font-bold`}>
                        <img className="w-4 h-6" src="https://send.monobank.ua/img/card.svg" alt="google Pay"/>
                        Оплатити карткою
                    </button>
                </div>
            );
        }
        return (
            <div className="w-full h-4/6 flex items-center flex-col">
                <PaymentFormFields></PaymentFormFields>
                <FooterPaymentForm></FooterPaymentForm>
            </div>
        );
    }

    return (
        <main className="w-1/2 h-full flex items-center flex-col">
            <DonationForm></DonationForm>
            <PaymentForm></PaymentForm>
        </main>
    );
}
export default RightCard;