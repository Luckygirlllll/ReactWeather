import { combineReducers } from 'redux'
//import BooksReducer from './reducer_books'
//import ActiveBook from './reducer_active_book'
import WeatherReducer from './reducer_weather'

const rootReducer = combineReducers({
  //books: BooksReducer, 
  //activeBook: ActiveBook,
  weather: WeatherReducer
});

export default rootReducer;
