import React, {Component} from 'react';

class Trail extends Component {

  state = {
    trail: []
  }

  handleClick = (event, trailId) => {
    this.state.trail.filter(trail => {
      if(trail !== trailId) {
        return this.setState ({
          trail: [...this.state.trail, trailId]
        })
      } else {
        return trail
      }
    })

  }
  render() {
  const {name, difficulty, length, location, stars} = this.props.trail
    return (
      <tr>
        <td>{name}</td>
        <td>{difficulty}</td>
        <td>{length}</td>
        <td>{location}</td>
        <td>{stars}</td>
        <td><input onChange={(event)=> this.handleClick(event, this.props.trail.id)} type ='checkbox'/></td>
      </tr>
    )
  }
}

export default Trail;
