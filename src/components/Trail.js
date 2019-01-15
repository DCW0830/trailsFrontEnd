import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addFavorite, deleteFavorite} from '../actions/users'

class Trail extends Component{

  handleClick = (event, trailId) => {
    if(event.target.checked) {
      this.props.addFavorite()
    } else {
      this.props.deleteFavorite()
    }
  }
  render() {

    const {name, difficulty, length, location, stars, id} = this.props.trail

    return (
      <tr onClick={()=> console.log} className="song">
        <td>{name}</td>
        <td>{difficulty}</td>
        <td>{length}</td>
        <td>{location}</td>
        <td>{stars}</td>
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

export default connect(null, {addFavorite, deleteFavorite}) (Trail)
