import apiCode from './.apiCodes'

const geocodeURL = 'https://maps.googleapis.com/maps/api/geocode/json?&key='
const trailsURL = 'https://www.hikingproject.com/data/get-trails?maxResults=500&maxDistance=45&key='
const trailsById ='https://www.hikingproject.com/data/get-trails-by-id?&key='
const baseAreaMap = "https://www.hikingproject.com/widget?v=3&map=1&type=trail&z=6&id="
const backEnd = 'http://localhost:3000/api/v1'

const url = {
  geocodeAPI: geocodeURL + apiCode.geocode,
  trailAPI: trailsURL + apiCode.trail,
  trailApiById: trailsById + apiCode.trail,
  logIn: `${backEnd}/login`,
  signUp: `${backEnd}/signup`,
  createTrail: `${backEnd}/trails`,
  deleteTrail:`${backEnd}/trails`,
  areaMap: baseAreaMap
}
export default url
