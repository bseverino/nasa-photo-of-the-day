import React, {useState} from "react";
import { CardImg, Spinner, Modal, ModalHeader, ModalBody } from 'reactstrap';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const ModalImg = styled.img`
    max-width: 100%;
`;

function Img(props){
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggleModal}>&times;</button>;

    if (!props.url) return <SpinnerContainer><Spinner color="dark" /></SpinnerContainer>;

    return (
        <div>
            <CardImg top width="100%" alt="NASA" src={props.url} onClick={toggleModal} className="card-img" />
            <Modal isOpen={modal} toggle={toggleModal} size="xl">
                {/* <ModalHeader /> */}
                <ModalBody className="modal-body"><ModalImg alt="NASA" src={props.url} /></ModalBody>
            </Modal>         
        </div>
    );
};

export default Img;