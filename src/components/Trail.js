import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addFavorite, deleteFavorite} from '../actions/users'
import {trailMap} from'../actions/trails'

class Trail extends Component{

  handleClick = (event, trailNumber) => {


    if(event.target.checked) {
      this.props.addFavorite(trailNumber)
    } else {

      let foundTrail
      this.props.userTrails.forEach(userTrailObj => {
        if(userTrailObj.trail_number === trailNumber){
         foundTrail = userTrailObj
        } else {
          return null
        }
      })
      this.props.deleteFavorite(foundTrail.id)
    }
  }
  render() {
    const {name, difficulty, length, location, id} = this.props.trail

    return (
      <tr onClick={()=> this.props.trailMap(id)} >
        <td>{name}</td>
        <td>{difficulty}</td>
        <td>{length}</td>
        <td>{location}</td>
        <td>
          <input
            onChange={(event)=>this.handleClick(event, id)}
            type ='checkbox'
          />
        </td>
      </tr>
    )
  }
}
const mapStateToProps = (state => {
  return ({
    userTrails: state.usersReducers.userTrails
  })
})

export default connect(mapStateToProps, {addFavorite, deleteFavorite, trailMap}) (Trail)
