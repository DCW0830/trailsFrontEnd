// ignore for now
// Intended to be a map for the total area searched to go along with the individual selected map.
// area map requires lat and lon properties to be converted to x and y coordinates.
// Below is the conversion equation but not properly written in Java Script.
// Possibly will convert in the future

// import React, {Component} from 'react';
// import url from '../urls'
// import {connect} from 'react-redux'
//
// let newX
// let newY
//
// const link = {
//   width: '600px',
//   padding: '12px',
//   height: '1000px'
// }
//
// class TrailMapArea extends Component  {
//
  // lonToX = (lon) => {
  //     newX = round(deg2rad(lon) * 6378137.0);
  //     if (is_nan(newX)) {
  //         newX = 0;
  //     }
  //     return newX;
  // }
  //
  // latToY = (lat) =>{
  //     newY = round(log(tan(M_PI_4 + deg2rad(lat) / 2.0)) * 6378137.0);
  //     if (is_nan(newY)) {
  //         newY = 0;
  //     }
  //     return newY;
//   // }
//
//   render(){
//     console.log(this.props.latLon)
//     return (
//       <div>
//         <iframe
//           style= {link}
//           frameBorder="0"
//           scrolling="no"
//         />
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = (state => {
//   return ({
//     latLon: state.trailsReducers.latLon
//   })
// })
//
// export default connect(mapStateToProps)(TrailMapArea)
