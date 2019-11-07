import React, {useState, useEffect} from "react";
import axios from "axios";
import { Col, Row, Card, CardText, CardBody, CardTitle, Button, ButtonGroup, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Img from "./data-components/Img";
import {years, months, days} from "./date-selection/DateValues";

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0");
let yyyy = today.getFullYear();

function Data() {   

    const [data, setData] = useState({});
    const [day, setDay] = useState(dd);
    const [month, setMonth] = useState(mm);
    const [year, setYear] = useState(yyyy);

    const [dropdownOpen1, setOpen1] = useState(false);
    const toggle1 = () => setOpen1(!dropdownOpen1);
    const [dropdownOpen2, setOpen2] = useState(false);
    const toggle2 = () => setOpen2(!dropdownOpen2);
    const [dropdownOpen3, setOpen3] = useState(false);
    const toggle3 = () => setOpen3(!dropdownOpen3);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=vs3GOayvKNnB2G3abHerQYB3f2QGhZ0jUTVcQxlL&date=${year}-${month}-${day}`)
            .then(response => {
                console.log(response);
                setData({
                    url: response.data.url,
                    title: response.data.title,
                    date: response.data.date,
                    explanation: response.data.explanation
                });
            })
            .catch(error => {
                console.log("No data returned", error);
                alert("Error: Not a valid date and/or image doesn't exist");
            });
    }, [day, month, year]);

    return (
        <Row className="card-container">
            <Col sm="12" md="8" lg="6">
                <Card className="card">
                    <CardBody>
                        <CardTitle>
                            <h3>{data.title}</h3>
                        </CardTitle>
    
                        <ButtonGroup>
                            <ButtonDropdown isOpen={dropdownOpen1} toggle={toggle1}>
                                <DropdownToggle caret className="currentYear">
                                    {year}
                                </DropdownToggle>
                                <DropdownMenu>
                                    {years.map((year, index) => {
                                        return (<DropdownItem key={index} onClick={() => {
                                            document.querySelector(".currentYear").innerText = year;
                                        }}>{year}</DropdownItem>)
                                    })}
                                </DropdownMenu>
                            </ButtonDropdown>
                            <ButtonDropdown isOpen={dropdownOpen2} toggle={toggle2}>
                                <DropdownToggle caret className="currentMonth">
                                    {month}
                                </DropdownToggle>
                                <DropdownMenu>
                                    {months.map((month, index) => {
                                        return (<DropdownItem key={index} onClick={() => {
                                            document.querySelector(".currentMonth").innerText = month;
                                        }}>{month}</DropdownItem>)
                                    })}
                                </DropdownMenu>
                            </ButtonDropdown>
                            <ButtonDropdown isOpen={dropdownOpen3} toggle={toggle3}>
                                <DropdownToggle caret className="currentDay">
                                    {day}
                                </DropdownToggle>
                                <DropdownMenu>
                                    {days.map((day, index) => {
                                        return (<DropdownItem key={index} onClick={() => {
                                            document.querySelector(".currentDay").innerText = day;
                                        }}>{day}</DropdownItem>)
                                    })}
                                </DropdownMenu>
                            </ButtonDropdown>
                        </ButtonGroup>
                        <Button className="date-button" onClick={() => {
                                setYear(document.querySelector(".currentYear").innerText);
                                setMonth(document.querySelector(".currentMonth").innerText);
                                setDay(document.querySelector(".currentDay").innerText);
                            }}>Change Date
                        </Button>
                    </CardBody>
    
                    {/* <CardImg top width="100%" src={data.url} alt="NASA" />  */}
                    <Img url={data.url} />
    
                    <CardBody>    
                        <CardTitle>(click image to enlarge)</CardTitle>
                        <CardText>{data.explanation}</CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default Data;