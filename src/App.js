import React, {useState} from 'react';
import SingleColor from './Single';
import Values from 'values.js'

function App() {

  //use state for storing string , setting error and default values
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit =(e) =>{
    e.preventDefault();
  
  try{
    const colors = new Values(color).all(10) //imported this from values.js package
    setList(colors)//all the colors are in setList
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

    <section className='colors'>
  

    </section>
    </>

  ) 
  }

export default App;
