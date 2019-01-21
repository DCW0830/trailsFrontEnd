import React, {Component} from 'react';
import {connect} from 'react-redux'
import {trailMap} from'../actions/trails'
import {deleteFavorite} from'../actions/users'

class Trail extends Component{

  render() {
    const {name, difficulty, length, location, id} = this.props.trail
    return (
      <tr onClick={()=> this.props.trailMap(id)} >
        <td>{name}</td>
        <td>{difficulty}</td>
        <td>{length}</td>
        <td>{location}</td>
        <td onClick={()=>this.props.deleteFavorite(this.props.userTrailId.id)}>
          <center>X</center>
        </td>
      </tr>
    )
  }
}

export default connect(null, {trailMap, deleteFavorite})(Trail)
