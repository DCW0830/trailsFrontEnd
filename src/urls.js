import apiCode from './.apiCodes'

const geocodeURL = 'https://maps.googleapis.com/maps/api/geocode/json?&key='
const trailsURL = 'https://www.hikingproject.com/data/get-trails?maxResults=500&maxDistance=45&key='


const url = {
  geocodeAPI: geocodeURL + apiCode.geocode,
  trailAPI: trailsURL + apiCode.trail
}


export default url
