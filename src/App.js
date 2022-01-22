import Body from './components/calc_body/Body'
import Head from './components/head_section/Head';
import Output from './components/Output';
import { useState } from 'react';


const App = () => {

  const [number, setNumber] = useState([
    0
  ]);

  
  const showNumber = (n) => {
    setNumber([n]);
    console.log (n);  
  }

  

  
  return (
    <div className='project_body'>
      <Head/>
      <Output myNumber= {number}/>
      <Body showNumber = {showNumber}/>
    </div>
  );
}

export default App;
