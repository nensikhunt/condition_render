import { useState } from "react";

function Form() {
    // input tag change event
    const [inputData, setInputdata] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phoneno: "",
        address:"",
        course:"",
        hobby:[],
        gender: ""
    })
    const inputChange = (e) => {
        var { name, value } = e.target
        setInputdata({
            ...inputData,
            [name]: value
        })
    }

    // radio button change event
    const [radioCheck, setRadiocheck] = useState({
        male: false,
        female: false,
        other: false
    })
    const radioChange = (e) => {
        const { name, value } = e.target
        setRadiocheck({
            ...radioCheck,
            [e.target.value]: true
        })
        setInputdata({
            ...inputData,
            gender: value
        })
    }

    // select tag change event
    const [selectCheck,setSelectcheck]=useState([]);
    const selectChange=(e)=>{
        const {name,value}=e.target
        setSelectcheck({
            ...selectCheck,
            [name]:value
        });
        setInputdata({
            ...inputData,
            course: value
        })
    }

    // check box change event
    const [checkboxCheck,setCheckbox]=useState({
        hobby:[]
    })
   const checkboxChange=(e)=>{
    const { value, checked } = e.target;
    const { hobby } = checkboxCheck;
    console.log(value);
   }

    // onsubmit event
    const formdataSubmit = (e) => {
        setRadiocheck({
            ...radioCheck,
            male: false,
            female: false,
            other: false
        })
        setSelectcheck({
            ...selectCheck,
            course:"bca"
        });
        setInputdata({
            ...inputData,
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            phoneno: "",
            address:"",
            gender: ""
        })
        console.log(inputData);
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={formdataSubmit}>
                Firstname:
                <input type={"text"} name={"firstname"} value={inputData.firstname} onChange={inputChange} /><br />

                Lastname:
                <input type={"text"} name={"lastname"} value={inputData.lastname} onChange={inputChange} /><br />

                Email:
                <input type={"text"} name={"email"} value={inputData.email} onChange={inputChange} /><br />

                Password:
                <input type={"password"} name={"password"} value={inputData.password} onChange={inputChange} /><br />

                Phoneno:
                <input type={"text"} name={"phoneno"} value={inputData.phoneno} onChange={inputChange} /><br /><br />

                Address:
                <textarea name={"address"} cols={20} rows={5} value={inputData.address} onChange={inputChange} /><br />

                Course:
                <select value={selectCheck.value} onChange={selectChange}>
                    <option>select course</option>
                    <option name={"course"} value={"bca"}>bca</option>
                    <option name={"course"} value={"bscit"}>bscit</option>
                    <option name={"course"} value={"btech"}>btech</option>
                    <option name={"course"} value={"bcom"}>bcom</option>
                    <option name={"course"} value={"bba"}>bba</option>
                </select><br />

                Hobby:
                <input type={"checkbox"} name={"hobby"} value={"reading"} onChange={checkboxChange} />reading
                <input type={"checkbox"} name={"hobby"} value={"writing"} onChange={checkboxChange} />writing
                <input type={"checkbox"} name={"hobby"} value={"singing"} onChange={checkboxChange} />singing<br />

                Gender:
                <input type={"radio"} name={"gender"} value={"male"} onChange={radioChange} checked={radioCheck.male} />Male
                <input type={"radio"} name={"gender"} value={"female"} onChange={radioChange} checked={radioCheck.female} />Female
                <input type={"radio"} name={"gender"} value={"other"} onChange={radioChange} checked={radioCheck.other} />Other<br />
                <input type={"submit"} value={"submit"}></input>
            </form>
        </>
    );
}

export default Form;