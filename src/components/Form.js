import React, { useState } from "react";
import FormInput from "./FormInput";
import "./Form.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form(props) {
    // to store entire data of the form, I declare the values object using the React useState 
    const [values, setValues] = useState({
        name: "",
        cardNumber:"",
        expiryMonth:"",
        expiryYear:"",
        cvv:""
    });

    // This is used for form validation primarily. Each input object is also used by the Child component FormInput, where it's fields/properties are used
    const inputs = [
        {
            id: 1,
            name:"cardholderName",
            type:"text",
            placeholder:"eg: Jane Appleseed",
            required:true,
            errorMessage:"Cardholder name cannot be empty",
            label:"CARDHOLDER NAME"
        },
        {
            id: 2,
            name:"cardNumber",
            type:"text",
            placeholder:"eg: 1234 5678 9012 3456",
            required:true,
            errorMessage:"Card number must be a 16 digit number",
            pattern: "^[0-9]{16}$",
            label:"CARD NUMBER"
        },
        {
            id: 3,
            name:"expiryMonth",
            type:"text",
            placeholder:"MM",
            required:true,
            errorMessage:"Invalid Month",
            pattern: "^[0-9]{2}$",
            label:"EXP. Date MM"
        },
        {
            id: 4,
            name:"expiryYear",
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

    // triggers on 'confirm details' button of the form
    const handleSubmit = (event) => {
        event.preventDefault();
        // props
        // console.log(values);
        props.setData(values); // setData used for setting the values in the parent component
        notify();
    }

    // onChange passed to the FormInput Child component, is triggered here as this function, to set values
    const onChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value }); // will set the data of all fields into values object of this component level
    }

    const notify = () => toast("Card Details updated!", {
        position: toast.POSITION.BOTTOM_RIGHT,
    });
    
    return(
        <>
            <form onSubmit={handleSubmit} className="forms">
                {inputs.map((input) => (
                    <FormInput 
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                    />
                ))}
                <button className="form-button purple">Confirm</button>
                <ToastContainer />
            </form>
        </>
    )
}

export default Form;