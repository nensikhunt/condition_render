import { useState } from "react";

function Formvalidation() {
    const [data, setdata] = useState({
        username: "",
        email: "",
        password: "",
        phoneno:""
    })
    const [error, setError] = useState("");
    const validation = (e, nameInput, valueInput) => {
        switch(nameInput){
            case 'username':
                if(!new RegExp(/^[a-zA-Z-' ]*$/).test(valueInput)){
                    setError("Only letters and white space allowed")
                }else{
                    setError("")
                }
                break;
            case 'email':
                if(!new RegExp(/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/i).test(valueInput)){
                    setError("Enter a valid email address")
                }else{
                    setError("")
                }
                break;
            case 'password':
                if(!new RegExp(/.*^(?=.{8,20})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/).test(valueInput)){
                    setError("Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers")
                }else{
                    setError("")
                }
                break;
            case 'phoneno':
                if(!new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i).test(valueInput)){
                    setError("enter only digit allowed")
                }else{
                    setError("")
                }
                break;
            default:
                setError("")
                break;
        }
    }
    const handleChange = (e) => {
        let nameInput = e.target.name;
        let valueInput = e.target.value;
        setdata({
            ...data,
            [nameInput]: valueInput
        })
        validation(e, nameInput, valueInput)
    }
    const handleSubmit = () => {
        console.log(data);
        setdata({
            ...data,
            username: "",
            email: "",
            password: "",
            phoneno:""
        })
    }
    return (
        <>
            <input type={"text"} name={"username"} placeholder={"username"} value={data.username} onChange={handleChange} /><br />
            <input type={"text"} name={"email"} placeholder={"email"} value={data.email} onChange={handleChange} /><br />
            <input type={"password"} name={"password"} placeholder={"password"} value={data.password} onChange={handleChange} /><br />
            <input type={"text"} name={"phoneno"} placeholder={"phoneno"} value={data.phoneno} onChange={handleChange} /><br />
            <input type={"button"} name={"submit"} value={"submit"} onClick={handleSubmit} />
            <p>{error}</p>
        </>
    );
}

export default Formvalidation;