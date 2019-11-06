import React, {useState, useEffect} from "react";
import axios from "axios";
import Img from "./data-components/Img";
import Title from "./data-components/Title";
import TodayDate from "./data-components/Date";
import Explanation from "./data-components/Explanation";

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0");
let yyyy = today.getFullYear();

function Data() {   

    const [data, setData] = useState({});
    const [day, setDay] = useState(`${yyyy}-${mm}-${dd}`);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=vs3GOayvKNnB2G3abHerQYB3f2QGhZ0jUTVcQxlL&date=${day}`)
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
    }, []);

    return (
        <section>
            <Img url={data.url} />
            <Title title={data.title}/>
            <TodayDate date={data.date} />
            <Explanation explanation={data.explanation} />
        </section>
    );
};

export default Data;