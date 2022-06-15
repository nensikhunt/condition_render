import { useState } from "react";

function Login() {
    const [login, setLogin]=useState(false);
    const Logedin=()=>{
        console.log(login);
        setLogin(!login);
    }
    return ( 
        <>
            {
                login === false ? <h1>User Login</h1> : <h1>User Logout</h1>
            }
            <button onClick={()=>Logedin()}>SUBMIT</button>
        </>
     );
}

export default Login;