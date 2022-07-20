import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight, index}) => {
  const [alert, setAlert] = useState(false);//for alert when copying values
  const bcg = rgb.join(',')//se[parating rgb values by join method
  console.log(bcg)
  const hex = rgbToHex(...rgb);
  return <article className={`color`}
  style={{backgroundColor:`rgb(${bcg})`}}>

    <p className='percent-value'>{weight}%  </p>
    <p>{hex}</p>

  </article>
}

export default SingleColor