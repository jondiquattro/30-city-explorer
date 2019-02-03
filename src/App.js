import React from 'react';
import Header from "./components/header/header.js";
import Form from "./components/form/form.js";
import Map from "./components/map/map";
import WeatherHeader from "./components/weather/weather-header";
import Weather from "./components/weather/weather";
import YelpHeader from "./components/yelp/yelp-header";
import Yelp from "./components/yelp/yelp";
import MeetupHeader from "./components/meetup/meetup-header";
import Meetup from "./components/meetup/meetup";
import MoviesHeader from "./components/movies/movies-header";
import Movies from "./components/movies/movies";
import TrailsHeader from "./components/trails/trails-header";
import Trails from "./components/trails/trails";
// import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

  updateLocation = (location)=>{
    this.setState({long: location.longitude, lat:location.latitude});
    console.log();
  }

  render() {
    return (
      <>
        <Header />
        <Form prompt="Update Location" handler={this.handleLocation} updateLocation={this.updateLocation} />
        <Map handler={this.handleLocation} updateLocation={this.updateLocation} />
        <WeatherHeader />
        <Weather />
        <YelpHeader />
        <Yelp />
        <MeetupHeader />
        <Meetup />
        <MoviesHeader />
        <Movies />
        <TrailsHeader />
        <Trails />
      </>
    );
  }
}

export default App;

