import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getTrails } from '../actions/trails'
import { Form, Input, Button } from 'semantic-ui-react'
import '../assets/css/index.css'

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
    const {loading} = this.props
    return (
      <div className="standard">
        <Form onSubmit={this.handleSubmit}>
          <h2>{loading? 'Loading Trails...': 'Search For Trails!'}</h2>
          <Form.Group>
            <Form.Field
              label="Enter City, State or Zip Code:"
              control='input'
              onChange={(event)=>this.setState({
                search: event.target.value
              })}
              name='search'
              placeholder='City, State or Zip Code'
              width={2}
              value={this.state.search}
              type="text"
            />

            <Form.Field
              label={`Search Mile Radius:  ${this.state.slider}`} 
              control='input'
              value={this.state.slider}
              width={2}
              onChange={(event)=>this.setState({
               slider: event.target.value
              })}
              name='radius'
              type="range"
              min='0'
              max='200'
            />
          </Form.Group>
         <Form.Button>Search</Form.Button>
        </Form>
      </div>
    );
  }
};

const mapStateToProps = (state => {
  return ({
    loading: state.trailsReducers.loading,
  })
})
export default connect (mapStateToProps, {getTrails})(FindTrailsForm);
