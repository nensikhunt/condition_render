import { useEffect, useRef, useState } from "react";

function Currencyconvert() {

    const [currency, setCurrency] = useState({
        inr: "",
        usd: ""
    })
    const currencyChnge = (e) => {
        setCurrency({
            ...currency,
            [e.target.name]: e.target.value
        })
        let INR = Number(currency.inr);
        let USD = Number(currency.usd);
        // if (Number.isNaN(INR)) {
        //     setCurrency({
        //         ...currency,
        //         inr: ""
        //     })
        // }
        // if (Number.isNaN(USD)) {
        //     setCurrency({
        //         ...currency,
        //         usd: ""
        //     })
        // }
        if (!Number.isNaN(INR)) {
            setCurrency({
                ...currency,
                inr: currency.inr,
                usd: currency.inr / 78
            })
        }
        console.log(currency);
    }

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