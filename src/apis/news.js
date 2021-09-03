import axios from 'axios'

export default axios.create({
    baseURL: 'https://saurav.tech/NewsAPI',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
    }
});


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
