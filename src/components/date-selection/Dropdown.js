import React, {useState} from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


function Dropdown(props){
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    const array = props.array;

    return (        
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret className={`${props.type}`}>
                {props.text}
            </DropdownToggle>
            <DropdownMenu>
                {array.map((value, index) => {
                    return (<DropdownItem key={index} onClick={() => {
                        document.querySelector(`.${props.type}`).innerText = value;
                    }}>{value}</DropdownItem>)
                })}
            </DropdownMenu>
        </ButtonDropdown>
    );
};

export default Dropdown;