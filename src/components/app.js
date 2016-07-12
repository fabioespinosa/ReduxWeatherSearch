import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';


export default class App extends Component {
  render() {
    this.props.fetchWeather('new york');
    this.props.fetchWeather('boston');
    this.props.fetchWeather('miami');

    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}



function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}


export default connect(null, mapDispatchToProps)(App);
