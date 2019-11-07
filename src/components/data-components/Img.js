import React from "react";
import { CardImg, Spinner } from 'reactstrap';

function Img(props){
    if (!props.url) return <Spinner color="dark" />;

    return (
        <CardImg top width="100%" alt="NASA" src={props.url} />
    );
};

export default Img;