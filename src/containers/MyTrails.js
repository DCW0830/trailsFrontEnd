import React, {Component} from 'react';
import NavBar from '../components/NavBar'

class MyTrails extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>List of your saved Trails!</h1>
      </div>
    );
  }
}

export default MyTrails
