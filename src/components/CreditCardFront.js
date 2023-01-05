import React, { useEffect } from "react";
import "./CreditCard.css";

function CreditCardFront(props) {

    const background = `./images/bg-card-front.png`;
    const cardLogo = `./images/card-logo.svg`

    // console.log("props", {...props});
    useEffect(() => {
        // console.log("At credit card component", props);
    });

    return(
        <div className="card"
        style={{
            backgroundImage: `url(${background})`,
        }}>
            <img src={cardLogo} alt="" />
            <label htmlFor="number" className="card__number">
                {props.myData.cardNumber}
            </label>
            <label htmlFor="name" className="card__name">
                {props.myData.cardholderName}
            </label>
            <small className="card__date">
                <label className="card_month" htmlFor="month">{props.myData.expiryMonth}</label>/
                <label className="card_year" htmlFor="year">{props.myData.expiryYear}</label>
            </small>            
            
        </div>
    );
}
export default CreditCardFront;