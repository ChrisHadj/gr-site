import axios from "axios";

const URL = "http://api.weatherstack.com/current";
const API_KEY = "2991d8b7f022d2f7205dd57b0b51af5e";

const FetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            query: query,
            units: "m",
            access_key: API_KEY,
        },
    });
    return data;
}

export default FetchWeather;