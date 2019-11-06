import React, {useState, useEffect} from "react";
import axios from "axios";
import {Card} from "./Card";

export const CardData = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=vs3GOayvKNnB2G3abHerQYB3f2QGhZ0jUTVcQxlL")
            .then(response => {
                console.log(response.data);
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
        <div>
            <Card url={data.url} title={data.title} date={data.date} explanation={data.explanation} />
        </div>
    );
};