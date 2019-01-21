import React, {Component} from 'react';

class Trail extends Component{

  state = {
    click: !!this.props.userTrailId
  }

  handleClick = (event, trailNumber) => {
    if(!this.state.click) {
      this.props.addFavorite(trailNumber)
      this.setState({ click: !this.state.click})
    } else {
      this.props.deleteFavorite(this.props.userTrailId.id)
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
