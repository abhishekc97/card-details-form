import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import CreditCardFront from "../components/CreditCardFront";
import CreditCardBack from "../components/CreditCardBack";
import "./Home.css";
import "../App.css"

function Home() {
    // cardData is an object. Its use is to store data that is passed from the Child component.
    const [cardData, setCardData] = useState({

    });

    const background = `./images/bg-main-desktop.png`;
    const mobileBackground = `./images/bg-main-mobile.png`;

    useEffect(() => {
        // console.log(cardData);
    }, [cardData]);

    // setData is a custom prop being passed to child component. In react we can pass custom props to a component just like we pass attributes to a html tag.
    // It can be passed either variable or function. it is triggered when called/used in the child component. 
    // Upon being used, it stores value in cardData (state in this component) with its setCardData method, so that the data is made available at this component level.

    return(
        <main className="app">
            <picture>
                <source src={mobileBackground}
                    media="(max-width: 800px)"
                />
                <img src={background} alt="background" />
            </picture>
            <aside className="card-wrapper">
                <CreditCardFront myData={cardData} />
                <CreditCardBack myData={cardData} />
            </aside>
            <div className="form-wrapper">
                <Form setData={setCardData}/>
            </div>
        </main>
        
    );
}

export default Home;