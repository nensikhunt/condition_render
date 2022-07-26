import { useEffect, useRef, useState } from "react";

function Currencyconvert() {
    const [currency,setCurrency]=useState({
        inr:"",
        usd:""
    })
    const count=useRef("")
    useEffect(()=>{
        count.current=currency
    },[])
    const currencyChnge=(e)=>{
        setCurrency({
            ...currency,
            inr:e.target.value,
            usd:currency.inr/78
        })
    }
    console.log(currency);
    return (
        <>
            <h1>Currency Convert</h1>
            inr:
            <input type={"text"} name={"inr"} onChange={currencyChnge} value={currency.inr} /><br />
            usd:
            <input type={"text"} name={"usd"} onChange={currencyChnge} value={currency.usd} />
        </>
    );
}

export default Currencyconvert;