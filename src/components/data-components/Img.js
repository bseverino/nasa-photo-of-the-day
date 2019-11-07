import React from "react";
import { CardImg, Spinner } from 'reactstrap';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
`;

function Img(props){
    if (!props.url) return <SpinnerContainer><Spinner color="dark" /></SpinnerContainer>;

    return (
        <CardImg top width="100%" alt="NASA" src={props.url} />
    );
};

export default Img;