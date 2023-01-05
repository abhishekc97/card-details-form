import React from "react";
import "./CreditCard.css";

function CreditCardBack(props) {
    const background = `./images/bg-card-back.png`;

    return(
        <div className="card back"
        style={{
            backgroundImage: `url(${background})`,
        }}>
            <label htmlFor="cvv" className="card__cvv">
                {props.myData.cvv}
            </label>
            
        </div>
    );
}
export default CreditCardBack;