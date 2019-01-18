import React, {Component} from 'react';
import {connect} from 'react-redux'
import {trailMap} from'../actions/trails'
import {deleteFavorite} from'../actions/users'

class Trail extends Component{

  handleClick = (event) => {
    let foundTrail

    this.props.userTrails.forEach(userTrailObj => {
      if(userTrailObj.trail_number === this.props.trail.id){
       foundTrail = userTrailObj
      } else {
        return null
      }
    })
    this.props.deleteFavorite(foundTrail.id)
  }

  render() {
    const {name, difficulty, length, location, id} = this.props.trail

    return (
      <tr onClick={()=> this.props.trailMap(id)} >
        <td>{name}</td>
        <td>{difficulty}</td>
        <td>{length}</td>
        <td>{location}</td>
        <td onClick={this.handleClick}>X</td>
      </tr>
    )
  }
}

const mapStateToProps = (state => {
  return ({
    userTrails: state.usersReducers.userTrails
  })
})


export default connect(mapStateToProps, {trailMap, deleteFavorite})(Trail)
