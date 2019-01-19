import React, {Component} from 'react';

class Trail extends Component{

  state = {
    click: false
  }

  handleClick = (event, trailNumber) => {
    if(!this.state.click) {
      this.props.addFavorite(trailNumber)
      this.setState({ click: !this.state.click})
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
      this.setState({ click: !this.state.click})
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
        <td onClick={(event)=>this.handleClick(event, id)}>
        {this.state.click? 'Remove' : 'Add'}
        </td>
      </tr>
    )
  }
}


export default Trail
