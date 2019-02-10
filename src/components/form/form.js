import React from 'react';
import superagent from 'superagent';
import Map from "./../map/map";
import WeatherHeader from "./../weather/weather-header";
import Weather from "./../weather/weather";
import YelpHeader from "./../yelp/yelp-header";
import Yelp from "./../yelp/yelp";
import MeetupHeader from "./../meetup/meetup-header";
import Meetup from "./../meetup/meetup";
import MoviesHeader from "./../movies/movies-header";
import Movies from "./../movies/movies";
import TrailsHeader from "./../trails/trails-header";
import Trails from "./../trails/trails";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapClassName: 'hide',
      divClassName: 'column-container hide',
      location: {},
      weather: [],
      yelp: [],
      meetups: [],
      movies: [],
      trails: [],
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    let data = await superagent.get(`https://city-explorer-backend.herokuapp.com/location?data=${e.target.inputsearch.value}`)
    this.setState({ location: data.body });
    
    console.log(`Query: ${this.state.location.formatted_query}, Lat: ${this.state.location.latitude}, Long: ${this.state.location.longitude}`);
    
    let weather = await superagent.get("https://city-explorer-backend.herokuapp.com/weather")
      .query({data: this.state.location})

    this.setState({weather: weather.body});

    //yelp
    let yelp = await superagent.get(`https://city-explorer-backend.herokuapp.com/yelp`)
    .query({data: this.state.location})

    this.setState({yelp: yelp.body})

    //meetup
    let meetups = await superagent.get(`https://city-explorer-backend.herokuapp.com/meetups`)
    .query({data: this.state.location})

    this.setState({meetups: meetups.body})


     //movie
     let movies = await superagent.get(`https://city-explorer-backend.herokuapp.com/movies`)
     .query({data: this.state.location})
 
     this.setState({movies: movies.body})

         //trails
         let trails = await superagent.get(`https://city-explorer-backend.herokuapp.com/trails`)
         .query({data: this.state.location})
     
         this.setState({trails: trails.body})




    this.setState({mapClassName: ''});
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <>
        <main>
        <FormScaff handleSubmit={this.handleSubmit} />
          <Map location={this.state.location} className={this.state.mapClassName}/>
          <div className={this.state.divClassName}>
            <section>
              <WeatherHeader />
              <Weather weather={this.state.weather} />
            </section>
            <section>
              <YelpHeader />
              <Yelp yelp={this.state.yelp} />
            </section>
            <section>
              <MeetupHeader />
              <Meetup meetups={this.state.meetups}/>
            </section>
            <section>
              <MoviesHeader />
              <Movies movies={this.state.movies}/>
            </section>
            <section>  
              <TrailsHeader />
              <Trails trails={this.state.trails}/>
            </section>
          </div>
        </main>
      </>
    );
  }
};

const FormScaff = props => {
  return (
    <form id="search-form" onSubmit={props.handleSubmit}>
      <label for="search">Search for a location</label>
      <input type="text" name="search" id="inputsearch" placeholder="Enter a location here" />
      <button type="submit">Explore!</button>
    </form>
  );
};

export default Form;