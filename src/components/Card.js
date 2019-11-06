import React from "react";

export const Card = props => {
    return (
        <div className="card">
            <img className="img-today" alt="NASA" src={props.url} />
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <p>{props.explanation}</p>
        </div>
    );
};