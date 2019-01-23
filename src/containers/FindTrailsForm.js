import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getTrails } from '../actions/trails'

class FindTrailsForm extends Component {

  state = {
    search: '',
    slider: 20
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.getTrails(this.state.search, this.state.slider)
    this.setState({
      search: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
           <label>
             {'Enter City, State or Zip Code:   '}
           </label>
           <input
             name='search'
             value={this.state.search}
             onChange={(event)=>this.setState({
              search: event.target.value
             })}
             type="text"
            />
            <input
              value={this.state.slider}
              onChange={(event)=>this.setState({
               slider: event.target.value
              })}
              name='radius'
              type="range"
              min='0'
              max='200'
            />
            <label>
              Search Mile Radius:   {this.state.slider}
            </label>
          </p>
         <button>Search</button>
        </form>
      </div>
    );
  }
};

export default connect (null, {getTrails})(FindTrailsForm);
