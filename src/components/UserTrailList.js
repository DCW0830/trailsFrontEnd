import React, {Component} from 'react';
import {connect} from 'react-redux'
import UserTrail from '../containers/UserTrail'
import {trailSort} from'../actions/trails'
import '../assets/css/index.css'
import { Table } from 'semantic-ui-react'
class UserTrailList extends Component {
  state = {
    click: false
  }

  handleClick = (event) => {
    this.setState({
      click: !this.state.click
    })
    this.props.trailSort(event.target.innerText, this.state.click, true)
  }

  createTrail = () => {
    if(this.props.userFetchedTrails) {
      return this.props.userFetchedTrails.map(trailObj => {
        return <UserTrail
          key={trailObj.id}
          trail={trailObj}
          userTrailId={this.props.userTrails.find(ut=> ut.trail_number === trailObj.id)}/>
      })
    }
  }
  render() {
    return (
      <Table className='standard' id='trailList' size='large' sortable striped celled selectable collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell onClick={this.handleClick}>Name</Table.HeaderCell>
            <Table.HeaderCell onClick={this.handleClick}>Difficulty</Table.HeaderCell>
            <Table.HeaderCell onClick={this.handleClick}>Length</Table.HeaderCell>
            <Table.HeaderCell onClick={this.handleClick}>Location</Table.HeaderCell>
            <Table.HeaderCell>Remove</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {this.createTrail()}
        </Table.Body>
      </Table>
    );
  }
}
export default connect(null, {trailSort})(UserTrailList)
