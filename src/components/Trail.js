import React from 'react';

const Trail = (props) => {
  const {name, difficulty, length, location, stars} = props.trail
  return (
    <tr className="song">
      <td>{name}</td>
      <td>{difficulty}</td>
      <td>{length}</td>
      <td>{location}</td>
      <td>{stars}</td>
    </tr>
  )
}

export default Trail;
