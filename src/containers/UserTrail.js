import React, {Component} from 'react';
import {connect} from 'react-redux'
import {trailMap} from'../actions/trails'
import {deleteFavorite} from'../actions/users'
import { Table } from 'semantic-ui-react'

class Trail extends Component{

  render() {
    const {name, difficulty, length, location, id} = this.props.trail
    const {userTrailId} = this.props
    return (
      <Table.Row onClick={()=> this.props.trailMap(id, userTrailId.id )} >
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{difficulty}</Table.Cell>
        <Table.Cell><center>{length}</center></Table.Cell>
        <Table.Cell><center>{location}</center></Table.Cell>
        <Table.Cell onClick={()=>this.props.deleteFavorite(userTrailId.id)}>
          <center>X</center>
        </Table.Cell>
      </Table.Row>
    )
  }
}

export default connect(null, {trailMap, deleteFavorite})(Trail)
