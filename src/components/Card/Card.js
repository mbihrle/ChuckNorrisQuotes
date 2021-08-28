import React from "react";
import "./Card.css";

const Card = ({ quote }) => {
    console.log("Card quote: ", quote);
    return (
        <div className="db tc  br3 pa3 ma2 grow shadow-5">
            <div className="cardText">
                <p>{quote}</p>
            </div>
        </div>
    );
};

export default Card;
