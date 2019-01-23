const API_GEOCODE_KEY =`${process.env.REACT_APP_GEOCODE_API_KEY}`
const API_HIKING_KEY =`${process.env.REACT_APP_HIKING_API_KEY}`

const geocodeURL = 'https://maps.googleapis.com/maps/api/geocode/json?&key='
const trailsURL = 'https://www.hikingproject.com/data/get-trails?maxResults=500&key='
const trailsById ='https://www.hikingproject.com/data/get-trails-by-id?&key='
const baseAreaMap = "https://www.hikingproject.com/widget?v=3&map=1&type=trail&z=6&id="
const backEnd = 'http://localhost:3000/api/v1'

const url = {
  geocodeAPI: geocodeURL + API_GEOCODE_KEY,
  trailAPI: trailsURL + API_HIKING_KEY,
  trailApiById: trailsById + API_HIKING_KEY,
  logIn: `${backEnd}/login`,
  signUp: `${backEnd}/signup`,
  createTrail: `${backEnd}/trails`,
  deleteTrail:`${backEnd}/trails`,
  areaMap: baseAreaMap
}
export default url
