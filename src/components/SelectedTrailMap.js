import React from 'react';
import url from '../urls'

const link = {
  width: '600px',
  padding: '12px',
  height: '1000px'
}

const SelectedTrailMap = (props) => {
  const {lng, lat} = props.latLog
  console.log(url.areaMap)
  console.log(props.latLog)

  return (
    <div>
      <iframe
        style= {link}
        frameBorder="0"
        scrolling="no"
      />
    </div>
  )
}

export default SelectedTrailMap
