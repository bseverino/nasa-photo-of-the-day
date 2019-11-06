import React from "react";

function Img(props){
    if (!props.url) return <h3>Loading...</h3>;

    return (
        <div className="img-container">
            <img className="img-today" alt="NASA" src={props.url} />
        </div>
    );
};

export default Img;