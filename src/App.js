import React, { Component } from 'react';
// import Form from './form.js';
import superagent from 'superagent';
// import './styles.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location : ""
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.dir(this.state.location);
    let data = await superagent.get(`https://city-explorer-backend.herokuapp.com/location?data=${this.state.location}`)
      console.log(data.body);
      this.setState({location: data.body});
      console.log(this.state.location.latitude);
    }
    
    handleChange = (event) => {
      const {name, value} = event.target;
      this.setState({
        [name]: value,
      });
    }
    
  render() {
    return (
      <form>
        <input name="location" type="text" value={this.state.text} onChange={this.handleChange} placeholder="typehere" />
        <button onClick={this.handleSubmit} id="location">{this.props.prompt}</button>
      </form>
    );
  }

}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      people: [],
      selectedPerson: '',
    };
  }

  handleForm = (count, people) => {
    this.setState({ count, people });
  };

  showPerson = person => {
    this.setState({ selectedPerson: person });
  };

  render() {
    return (
      <>
        <Form prompt="Update Location" handler={this.handleLocation} />
        <p>{this.state.location}</p>
        <h3>Selected Character: {this.state.selectedPerson}</h3>
        <ul>
          {Object.keys(this.state.people).map((person, idx) => {
            return (
              <li key={idx}>
                <a href="#" onClick={() => this.showPerson(person)}>
                  {person}
                </a>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

const MapComponent = async (props) => {
  let url =`https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat}%2c%20${props.location.longitude}&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyDp0Caae9rkHUHwERAFzs6WN4_MuphTimk`;
  let data = await superagent.get(url);
  return(
    <div>{data}</div>
  );
}

{/* <MapComponent lat={this.state.location.latitude} long={this.state.location.longitude} /> */}

export default App;

