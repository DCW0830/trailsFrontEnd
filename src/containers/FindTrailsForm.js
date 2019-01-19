import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getTrails } from '../actions/trails'

class FindTrailsForm extends Component {

  state = {
    search: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.getTrails(this.state.search)
    this.setState({
      search: ''
    })
  }

  render() {
    return (
      <div>
       <form onSubmit={this.handleSubmit}>
         <label>
           Enter City, State or Zip Code:
         </label>
         <input
           value={this.state.search}
           onChange={(event)=>this.setState({
            search: event.target.value
           })}
           type="text"
          />
          <button>Search</button>
       </form>
     </div>
   );
 }
};

export default connect (null, {getTrails})(FindTrailsForm);
