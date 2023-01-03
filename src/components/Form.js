import React, { useState } from "react";
import FormInput from "./FormInput";
import "./formInput.css"

function Form() {
    // const [name, setName] = useState('');
    // const [cardNumber, setCardNumber] = useState('');
    // const [expiryMonth, setExpiryMonth] = useState('');
    // const [expiryYear, setExpiryYear] = useState('');
    // const [cvv, setCvv] = useState('');
    // const [error, setError] = useState(false);

    const [values, setValues] = useState({
        name: "",
        cardNumber:"",
        expiryMonth:"",
        expiryYear:"",
        cvv:""
    });

    const inputs = [
        {
            id: 1,
            name:"cardholder name",
            type:"text",
            placeholder:"eg: Jane Appleseed",
            required:true,
            errorMessage:"Cardholder name cannot be empty",
            label:"CARDHOLDER NAME"
        },
        {
            id: 2,
            name:"card number",
            type:"text",
            placeholder:"eg: 1234 5678 9012 3456",
            required:true,
            errorMessage:"Card number must be a 16 digit number",
            pattern: "^[0-9]{16}$",
            label:"CARD NUMBER"
        },
        {
            id: 3,
            name:"expiry month",
            type:"text",
            placeholder:"MM",
            required:true,
            errorMessage:"Invalid Month",
            pattern: "^[0-9]{2}$",
            label:"EXP. Date MM"
        },
        {
            id: 4,
            name:"expiry year",
            type:"text",
            placeholder:"YY",
            required:true,
            errorMessage:"Invalid Year",
            pattern: "^[0-9]{2}$",
            label:"YY"
        },
        {
            id: 5,
            name:"cvv",
            type:"text",
            placeholder:"eg. 123",
            required:true,
            errorMessage:"CVV has to be 3 digit number",
            pattern: "^[0-9]{3}$",
            label:"CVV"
        }
        
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const onChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value });
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <FormInput 
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                    />
                ) )}
                <button>Confirm</button>
            </form>
        </>
    )
}

export default Form;