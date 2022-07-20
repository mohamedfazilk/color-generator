import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,type}) => {
  const [alert, setAlert] = useState(false);//for alert when copying values
  const bcg = rgb.join(',')//se[parating rgb values by join method
  console.log(bcg)
  return <article className={`color`}
  style={{backgroundColor:`rgb(${bcg})`}}>

  </article>
}

export default SingleColor