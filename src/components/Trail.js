import React, {Component} from 'react';
import { Table } from 'semantic-ui-react'

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
      <Table.Row onClick={()=> this.props.trailMap(id)}>
          <Table.Cell selectable>
            <a href='#'>{name}</a>
          </Table.Cell>
          <Table.Cell>{difficulty}</Table.Cell>
          <Table.Cell>{length}</Table.Cell>
          <Table.Cell>{location}</Table.Cell>
          <Table.Cell selectable onClick={(event)=>this.handleClick(event, id)}>
            <a href='#'>{this.state.click? 'Remove' : 'Add'}</a>
          </Table.Cell>
      </Table.Row>
    )
  }
}


export default Trail
