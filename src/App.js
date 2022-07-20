import React, {useState} from 'react';
import SingleColor from './Single';
import Values from './value.js'

function App() {

  //use state for storing string , setting error and default values
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit =(e) =>{
    e.preventDefault();
    console.log('hii');

  }
  return(
    <>
    <section className='container'>
      <h3>color Generator</h3>
    <form onSubmit={handleSubmit}>
      <input type="text" value={color} />
    </form>
    </section>
    </>

  ) 
  }

export default App;
