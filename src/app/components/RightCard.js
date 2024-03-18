import {useEffect, useRef, useState} from "react";
import {getCorrectMoneyFormat, getNumber} from "../helpers";
import UserList from "../userList";
import user from "../user";
import User from "../user";

const flexClasses = "flex items-center justify-center",
      border = "border-[1px] border-[#ccc] border-solid}"

const fieldContainerStyles  = `w-5/6 h-14 ${flexClasses} mb-4`,
      inputUserFieldStyles  = `w-full h-full ${border} p-4 rounded-2xl text-lg`;

const buttonUserFieldStyles= `w-full h-full p-4 rounded-xl ${flexClasses} bg-black hover:bg-opacity-75`;

const smallButtonMoneyStyles = `w-24 h-10 ${border} rounded-2xl text-sm 
                                       font-medium border-gray-300 hover:bg-[#808080] hover:bg-opacity-25`;

function RightCard() {
    let users = new UserList();

    const maxMoney = 29999;
    const [inputWidth, setInputWidth] = useState(2);

    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [money, setMoney] = useState(0);

    const inputRef = useRef(null);
    const nameRef = useRef(null);
    const commentRef = useRef(null);

    useEffect(() => { if (nameRef.current) nameRef.current.focus(); }, [name]);
    useEffect(() => { if (commentRef.current) commentRef.current.focus(); }, [comment]);
    useEffect(() => { if (inputRef.current) inputRef.current.focus(); }, [money]);

    function updateMoneyInput (money){
        setMoney(getCorrectMoneyFormat(money));
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

    const inputNameHandler = (event) => {
        setName(event.target.value);
    }

    const inputCommentHandler = (event) => {
        setComment(event.target.value);
    }

    const buttonHandler = () => {
        users.addUser(new User(name, comment, getNumber(money)));
        users.printAllUsersInformation();
    }

    const RightCardContainer = ({children}) => {
        return (
            <main className="w-1/2 h-full flex items-center flex-col"> {children} </main>
        );
    }
    const GradientContainer = ({ children }) => {
        return (
            <div className="w-4/5 h-60 mt-12 p-1 rounded-3xl gradient-bg-2">
                {children}
            </div>
        );
    }
    const WhiteContainer = ({ children }) => {
        return (
            <div className="w-full h-full p-3 flex items-center flex-col rounded-3xl bg-white">
                {children}
            </div>
        );
    }
    const HeaderDonationCard = () => {
        return (
            <div className={`w-full h-1/6 gap-2 ${flexClasses}`}>
                <p className="font-medium">Сума поповнення</p>
                <img className="w-4 h-4" src="https://send.monobank.ua/img/money.png" alt=""/>
            </div>
        );
    }
    const BodyDonationCard = () => {
        const moneyInputHandler = (event) => {
            const inputValue = getNumber(event.target.value);
            moneyHandler(inputValue);
        }
        const DonationInputContainer = ({children}) => {
            return (
                <div className={`w-full h-3/6 pt-2 ${flexClasses} font-bold text-opacity-[0.6] text-[#808080]`}>{children}</div>
            );
        }
        return (
            <DonationInputContainer>
                <input className="w-8 text-5xl outline-none text-center" id="moneyInput" ref={inputRef}
                       value={money}
                       onChange={moneyInputHandler}
                       style = {{width: `${inputWidth}ch`}}
                />
                <div className="text-5xl">₴</div>
            </DonationInputContainer>
        );
    }
    const SmallMoneyButton = ({value, onClick}) => {
        return (
            <button className={`${smallButtonMoneyStyles}`} id="smallButton"
                    value={value}
                    onClick={onClick}>+{value}&nbsp;₴
            </button>
        );
    }
    const FooterDonationCard = () => {

        const SmallButtonContainer = ({children}) => {
            return (
                <div className={`w-full h-2/6 gap-3 ${flexClasses}`}>{children}</div>
            );
        }
        return (
            <SmallButtonContainer>
                <SmallMoneyButton value={100} onClick={moneyButtonHandler}></SmallMoneyButton>
                <SmallMoneyButton value={500} onClick={moneyButtonHandler}></SmallMoneyButton>
                <SmallMoneyButton value={1000} onClick={moneyButtonHandler}></SmallMoneyButton>
            </SmallButtonContainer>
        );
    }
    const PaymentFormContainer = ({children}) => {
        return (
            <div className="w-full h-4/6 flex items-center flex-col">
                {children}
            </div>
        );
    }
    const PaymentFormFields = () => {
        return (
            <div className={`w-5/6 h-full flex items-center text-center flex-col bg-white`}>
                <div className={`${fieldContainerStyles} mt-8`}>
                    <input className={`${inputUserFieldStyles}`} ref={nameRef}
                           id="nameInput"
                           value={name}
                           onChange={inputNameHandler}
                           placeholder="Ваше ім'я (необов'язково)"
                    />
                </div>
                <div className={`${fieldContainerStyles}`}>
                    <input className={`${inputUserFieldStyles}`} ref={commentRef}
                           value={comment}
                           id="commentInput"
                           onChange={inputCommentHandler}
                           placeholder="Ваш коментар (необов'язково)"
                    />
                </div>
                <div className={`${fieldContainerStyles}`}>
                    <button className={`${buttonUserFieldStyles}`}
                            onClick={buttonHandler}
                            id="monoPay">
                        <img className="w-26 h-6" src="https://send.monobank.ua/img/mono_pay.svg" alt="mono Pay"/>
                    </button>
                </div>
                <div className={`${fieldContainerStyles}`}>
                    <button className={`${buttonUserFieldStyles}`}
                            onClick={buttonHandler}
                            id="googlePay">
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
        <RightCardContainer>
            <GradientContainer>
                <WhiteContainer>
                    <HeaderDonationCard></HeaderDonationCard>
                    <BodyDonationCard></BodyDonationCard>
                    <FooterDonationCard></FooterDonationCard>
                </WhiteContainer>
            </GradientContainer>
            <PaymentFormContainer>
                <PaymentFormFields></PaymentFormFields>
                <FooterPaymentForm></FooterPaymentForm>
            </PaymentFormContainer>
        </RightCardContainer>
    );
}
export default RightCard;