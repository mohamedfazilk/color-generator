import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight, index, hexcolor}) => {
  const [alert, setAlert] = useState(false);//for alert when copying values
  const bcg = rgb.join(',')//se[parating rgb values by join method
  console.log(bcg)
  console.log(hexcolor)
  
  const hexvalue = `#${hexcolor}`   //set the # code in to hexvalues by template string

  const hex = rgbToHex(...rgb);       //printing the hex values by rgbToHex method also

  return <article 
  className={`color ${index>10 && 'color-light'}`
 }
  style={{backgroundColor:`rgb(${bcg})`}}
  onClick={()=>{
    setAlert(true);
    navigator.clipboard.writeText(hexvalue) //for copying the text
  }}
  >
    <p className='percent-value'>{weight}%  </p>
    {alert && <p className='alert'>Copied to Clipboard</p>}
    <p>{hexvalue}</p>
  

  </article>
}

export default SingleColor