import {useEffect} from "react";

const getStringMoneyFormat = (money) => money.toLocaleString().replace(",", " ");
const getNumber = (inputValue) => {
    const number = parseInt(inputValue.replace(/\D/g, ""));
    return isNaN(number) ? 0 : number;
}
export {
    getStringMoneyFormat,
    getNumber
}