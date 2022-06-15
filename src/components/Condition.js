import { useState } from "react";

function Condition() {
    const [msg,setLogin]=useState(false);
    const userhandle=()=>{
        setLogin(!msg);
    }
    if (msg === true) {
        return (
            <>
                <h1>you're logout successfully</h1>
                <button onClick={()=>userhandle()}>LOGIN</button>
            </>
        )
    } else {
        return (
            <>
                <h1>you're login successfully</h1>
                <button onClick={()=>userhandle()}>LOGIOUT</button>
            </>
        )
    }
}

export default Condition;