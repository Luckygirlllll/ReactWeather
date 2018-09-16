import React, { Component } from 'react';


// import BookList from '../containers/book-list'
// import BookDetail from '../containers/book-detail'
import SearchBar from '../containers/search-bar'
import WeatherList from '../containers/weather_list'

export default class App extends Component {
  render() {
    return (
      <div>
      {/* <BookList />
      <BookDetail /> */}
        <SearchBar />
        <WeatherList />
      </div>
    )
  }
}
