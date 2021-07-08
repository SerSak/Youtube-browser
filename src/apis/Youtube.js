import axios from 'axios';
const KEY = 'AIzaSyAPjQXpXKMac-fP5l-A1jUlD5OE2R5GqfE';



export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",

    params: {
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY,
    }

});
