import React from 'react';
import superagent from 'superagent';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    let data = await superagent.get(`https://city-explorer-backend.herokuapp.com/location?data=${this.state.location}`)
    this.setState({ location: data.body });
    console.log(`Query: ${this.state.location.formatted_query}, Lat: ${this.state.location.latitude}, Long: ${this.state.location.longitude}`);
    this.props.updateLocation(this.state.location)
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
        <form>
          <input name="location" type="text" value={this.state.text} onChange={this.handleChange} placeholder="typehere" />
          <button onClick={this.handleSubmit} id="location">{this.props.prompt}</button>
        </form>
      </>
    );
  }

}

export default Form;