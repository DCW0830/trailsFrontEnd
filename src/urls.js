import apiCode from './.apiCodes'

const geocodeURL = 'https://maps.googleapis.com/maps/api/geocode/json?&key='
const trailsURL = 'https://www.hikingproject.com/data/get-trails?maxResults=500&maxDistance=45&key='
const baseAreaMap = "https://www.hikingproject.com/widget/map?favs=1&location=fixed&z=8.5&h=500"
const backEnd = 'http://localhost:3000/api/v1'


const url = {
  geocodeAPI: geocodeURL + apiCode.geocode,
  trailAPI: trailsURL + apiCode.trail,
  logIn: `${backEnd}/login`,
  signUp: `${backEnd}/signup`,
  areaMap: baseAreaMap
}


export default url
