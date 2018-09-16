import axios from 'axios'

const API_KEY = 'c04a038a29d862a5c44e3fa87ede8a65'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'


export function selectBook(book){
    //
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}

export function fetchWeather(city){
const url = `${ROOT_URL}&q=${city},us`
const request = axios.get(url)

console.log('Request ', request)

    return {
        type: FETCH_WEATHER,
        payload: request,
    }
}