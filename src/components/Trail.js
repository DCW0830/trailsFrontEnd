import React from 'react';

const Trail = (props) => {

  const {name, difficulty, length, location, stars, id} = props.trail

  return (
    <tr onClick={()=> console.log} className="song">
      <td>{name}</td>
      <td>{difficulty}</td>
      <td>{length}</td>
      <td>{location}</td>
      <td>{stars}</td>
      <td>
        <input
          onChange={(event)=>props.handleClick(event, id)}
          type ='checkbox'
        />
      </td>
    </tr>
  )
}

export default Trail;
