import React, { Component } from 'react';
// import Form from './form.js';
import superagent from 'superagent';
// import './styles.scss';




class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.dir(this.state.location);
    let data = await superagent.get(`https://city-explorer-backend.herokuapp.com/location?data=${this.state.location}`)
      console.log(data.body);
      this.setState({location: data.body});
      console.log(this.state.location.latitude);


      //needs to call the setter function
      this.props.updateLocation(this.state.location)
      // this.props.setState({lat:this.props.location.latitude, long: this.props.location.longitude })
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

//parent component

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    };
    //to update the state
    
  }

  updateLocation = (location)=>{
    this.setState({long: location.longitude, lat:location.latitude});
  }

  render() {
    return (
      <>
        <Form prompt="Update Location" handler={this.handleLocation} updateLocation={this.updateLocation} />
        <p> location is: {this.state.location} here</p>

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

