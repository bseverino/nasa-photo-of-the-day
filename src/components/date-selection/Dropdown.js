import React from "react";
import {years, months, days} from "./DateValues";

function Dropdown(props){
    return (
        <div className="Dropdowns">
            <div className="dropdownYears">
                <div className="currentYear">{props.yyyy}</div>
                {years.map((year, index) => {
                    return (<div className="option" key={index}>{year}</div>)
                })}
            </div>
            <div className="dropdownMonths">
                <div className="currentMonth">{props.mm}</div>
                {months.map((month, index) => {
                    return (<div className="option" key={index}>{month}</div>)
                })}
            </div>
            <div className="dropdownDays">
                <div className="currentDay">{props.dd}</div>
                {days.map((day, index) => {
                    return (<div className="option" key={index}>{day}</div>)
                })}
            </div>
        </div>
    );
};

export default Dropdown;