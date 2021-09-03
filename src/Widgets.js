import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import axios from 'axios'

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
        <div className="widgets__articleLeft">
            <FiberManualRecordIcon />
        </div>

        <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
        </div>
    );

    return (
        <div className="widgets">
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>

        {newsArticle("S&P 500 reaches all time high", "Top News - 9099 readers")}
        {newsArticle("Coronavirus: US updates", "Top News - 886 readers")}
        {newsArticle("Tesla hits new highs", "Cars & Auto - 300 readers")}
        {newsArticle("Bitcoin Breaks $55k", "Crypto - 8000 readers")}
        {newsArticle("React v.17 is here!", "Code - 123 readers")}
        </div>
    );
}

export default Widgets

// WOULD LIKE TO SET UP REAL NEWS HEADLINES

// WITH AXIOS GET REQUESTS TO THIS NEWS API

// https://github.com/SauravKanchan/NewsAPI


// function getUSBusinessHeadline() {
    //     axios.get('https://saurav.tech/NewsAPI/top-headlines/category/business/us.json').then(
    //         (response) => {
    //             const result = response.data.articles[0].title;
    //             // console.log(result.toString());
    //             return result.toString();
    //         },
    //         (error) => {
    //             console.log(error);
    //         }
    //     );


    // }

    // const getUSTechHeadline = () => {
    //     axios.get('https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json').then(
    //         (response) => {
    //             const result = JSON.stringify(response.data.articles[0].title);
    //             console.log(result);
    //             return result;
    //         },
    //         (error) => {
    //             console.log(error);
    //         }
    //     );


    // }
    
    // console.log(getUSBusinessHeadline());
    // console.log(getUSTechHeadline());