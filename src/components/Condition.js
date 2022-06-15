import { useState } from "react"
import Conditionmsg from "./Conditionmsg";

function Condition() {
    const [login, setLogin] = useState(false)
    const Login = () => {
        setLogin(true)
    }
    const Logout = () => {
        setLogin(false)
    }
    if (login === false) {
        return (
            <>
                <Conditionmsg message="Login Message" />
                <button onClick={() => Login()}>Login</button>
            </>
        )
    } else {
        return (
            <>
                <Conditionmsg message="Logout Message" />
                <button onClick={() => Logout()}>Logout</button>
            </>
        )
    }
}

export default Condition;