import React, {useState, useEffect} from "react";
import axios from "axios";
import Img from "./data-components/Img";
import Title from "./data-components/Title";
import TodayDate from "./data-components/Date";
import Explanation from "./data-components/Explanation";
import Dropdown from "./date-selection/Dropdown";
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
            });
    }, [day, month, year]);

    return (
        <section>
            <div className="dropdowns">
            <div className="dropdown dropdownYears">
                <div className="currentYear" onClick={() => {
                        document.querySelector(".menuYears").classList.toggle("hide");
                    }}>{year}</div>
                <div className="menu menuYears hide">
                    {years.map((year, index) => {
                        return (<div className="option" key={index} onClick={() => {
                            setYear(year);
                            document.querySelector(".menuYears").classList.toggle("hide");
                        }}>{year}</div>)
                    })}
                </div>
                </div>
                <div className="dropdown dropdownMonths">
                    <div className="currentMonth" onClick={() => {
                        document.querySelector(".menuMonths").classList.toggle("hide");
                    }}>{month}</div>
                    <div className="menu menuMonths hide">
                        {months.map((month, index) => {
                            return (<div className="option" key={index} onClick={() => {
                                setMonth(month);
                                document.querySelector(".menuMonths").classList.toggle("hide");
                            }}>{month}</div>)
                        })}
                    </div>
                </div>
                <div className="dropdown dropdownDays">
                    <div className="currentDay" onClick={() => {
                        document.querySelector(".menuDays").classList.toggle("hide");
                    }}>{day}</div>
                    <div className="menu menuDays hide">
                        {days.map((day, index) => {
                            return (<div className="option" key={index} onClick={() => {
                                setDay(day);
                                document.querySelector(".menuDays").classList.toggle("hide");
                            }}>{day}</div>)
                        })}
                    </div>
                </div>
            </div>
            <Img url={data.url} />
            <Title title={data.title}/>
            <TodayDate date={data.date} />
            <Explanation explanation={data.explanation} />
            {/* <Dropdown day={day} yyyy={yyyy} mm={mm} dd={dd} /> */}            
        </section>
    );
};

export default Data;