import React, {Component} from 'react';
import {connect} from 'react-redux'
import Trail from '../components/Trail'
import {addFavorite, deleteFavorite} from '../actions/users'
import { Table, Button, Menu } from 'semantic-ui-react'
import {trailMap, trailSort} from'../actions/trails'
import '../assets/css/index.css'
const pa = 7

class SearchedTrailList extends Component {
  state = {
    trailsCounter: 0,
    pageTurn: 1,
    click: false
  }

  handleNext = (event) => {
    event.preventDefault()
    if(this.state.trailsCounter + pa <= this.props.trails.length)
    this.setState({
      trailsCounter: this.state.trailsCounter + pa, pageTurn: this.state.pageTurn + 1
    })
  }

  handlePrevious = (event) => {
    event.preventDefault()
    if (this.state.trailsCounter !== 0) {
      this.setState({
        trailsCounter: this.state.trailsCounter - pa, pageTurn: this.state.pageTurn - 1
      })
    }
  }

  handleClick = (event) => {
    this.setState({
      click: !this.state.click
    })
    this.props.trailSort(event.target.innerText, this.state.click)
  }

  displayResults = () => {
    let endNumber
    let firstNumber
    let number = this.props.trails.length / pa
    let difference = this.props.trails.length % 20

    if (this.state.pageTurn <= number) {
      endNumber = this.state.pageTurn * pa
      firstNumber = endNumber - pa + 1
    } else {
      endNumber = number * pa
      firstNumber = endNumber - difference + 1
    }
    return <h1>Showing: {firstNumber} - {endNumber} of total {this.props.trails.length} Results</h1>
  }

  createTrail = () => {
    if (this.props.trails[0]) {
      return this.props.trails.map((trailObj, idx) => {
        if (idx >= this.state.trailsCounter && idx < this.state.trailsCounter + pa) {
          return <Trail
            addFavorite={this.props.addFavorite}
            deleteFavorite={this.props.deleteFavorite}
            trailMap={this.props.trailMap}
            userTrailId={this.props.userTrails.find(ut => ut.trail_number === trailObj.id)}
            key={trailObj.id}
            trail={trailObj}/>
        } else {
          return null
        }
      })
    }
  }

  render() {
    const { city, state, county, zipCode} =this.props.location
    const {trails} = this.props
    return (
      <div className='FixedHeightContainer'>
        <div className= 'Title'>
          {city? `Trail Results For: ${city.long_name}`: null}
          {state? ` ${state.long_name}`: null}
          {zipCode? ` ${zipCode.long_name}`: null}
          {county? ` ${county.long_name}`: null}
          {trails[0]? this.displayResults(): null}
          <Table className='content' attached='top' size='large' sortable striped celled selectable padded>

            <Table.Header >
              <Table.Row>
                <Table.HeaderCell onClick={this.handleClick}>Name</Table.HeaderCell>
                <Table.HeaderCell onClick={this.handleClick}>Difficulty</Table.HeaderCell>
                <Table.HeaderCell onClick={this.handleClick}>Length</Table.HeaderCell>
                <Table.HeaderCell onClick={this.handleClick}>Location</Table.HeaderCell>
                <Table.HeaderCell>Favorite</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {this.createTrail()}
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='3'>
                  <Menu pagination>
                    <Menu.Item>
                     {trails.length > pa? <Button content='Previous' icon='left arrow' labelPosition='left' onClick={this.handlePrevious}/>:null}
                    </Menu.Item>
                    <Menu.Item>
                     {trails.length > pa? <Button content='Next' icon='right arrow' labelPosition='right' onClick={this.handleNext}/>:null}
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
            
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state => {
  return ({
    trails: state.trailsReducers.trails,
    noTrails: state.trailsReducers.noTrails,
    userTrails: state.usersReducers.userTrails,
    location: state.trailsReducers.location,
  })
})

export default connect(mapStateToProps, {trailSort, addFavorite, deleteFavorite, trailMap})(SearchedTrailList)
