import React, {Component} from 'react';
import {connect} from 'react-redux'
import {trailMap} from'../actions/trails'
import {deleteFavorite} from'../actions/users'

class Trail extends Component{

  render() {
    const {name, difficulty, length, location, id} = this.props.trail
    const {userTrailId} = this.props
    return (
      <tr onClick={()=> this.props.trailMap(id, userTrailId.id )} >
        <td>{name}</td>
        <td>{difficulty}</td>
        <td><center>{length}</center></td>
        <td><center>{location}</center></td>
        <td onClick={()=>this.props.deleteFavorite(userTrailId.id)}>
          <center>X</center>
        </td>
      </tr>
    )
  }
}

export default connect(null, {trailMap, deleteFavorite})(Trail)
