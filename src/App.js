import React, {useState} from 'react';
import SingleColor from './Single';
import Values from 'values.js'

function App() {

  //use state for storing string , setting error and default values
  const [color, setColor] = useState('#f15025');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025')
  .all(10));

  const handleSubmit =(e) =>{
    e.preventDefault();
  
  try{
    const colors = new Values(color).all(10) //imported this from values.js package
    setList(colors)//all the colors are in setList
    setError(false)
    console.log(colors); 

  }
  catch(error){
    setError(true);
    console.log(error);
    
  } 
  
  }
  return(
    <>
    <section className='container'>
      <h3>color Generator</h3>

    {/* //form submission// */}
    <form onSubmit={handleSubmit}>
      <input type="text" value={color}
        onChange={(e)=>setColor(
        e.target.value)}
         placeholder='#15205'
         className={ error?'error':null}/>
        <button className='btn'>Generate</button>
    </form>
    </section>

    <section className='colors' >
      {list.map((color,index)=>{
        console.log(color);
        return <SingleColor   key={index} {...color} index={index} hexcolor={color.hex}/> //print the hex values
        //by another method
      }
      )}

    </section>
    </>

  ) 
  }

export default App;
