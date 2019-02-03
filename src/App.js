import React from 'react';
import Header from "./components/header/header.js";
import Form from "./components/form/form.js";
// import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <Form prompt="Update Location" handler={this.handleLocation} updateLocation={this.updateLocation} />
        </main>
      </>
    );
  }
}

export default App;

