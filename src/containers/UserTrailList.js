import React, {Component} from 'react';
import UserTrail from './UserTrail'

class UserTrailList extends Component {
  createTrail = () => {
    if(this.props.userTrails) {
      return this.props.userTrails.map(trailObj => {
        return <UserTrail key={trailObj.id} trail={trailObj}/>
      })
    }
  }

  render() {
    return (
      <form>
        <table className="trail-list" >
          <tbody>
            <tr>
              <th>Name</th>
              <th>Difficulty</th>
              <th>Length</th>
              <th>Location</th>
              <th>Remove</th>
            </tr>
            {this.createTrail()}
          </tbody>
        </table>
      </form>
    );
  }
}

export default UserTrailList
