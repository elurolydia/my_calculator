import Body from './components/calc_body/Body'
import Head from './components/head_section/Head';
import Output from './components/Output';
import { useState } from 'react';



const App = () => {

  var displayedNumber = '0';
  const [number, setNumber] = useState(displayedNumber);
  const [initialValue, setInitialValue] = useState();

  
  const showNumber = (n) => {
    if(number === '0'){
      displayedNumber = n;
      setNumber(displayedNumber);
    }else{
      displayedNumber = number + n;
      setNumber(displayedNumber);
    }     
  }

   const plus = () => {
    setInitialValue(Number(number));
    setNumber('0');
   }

  

   const equalto = () => {
     let result = initialValue + Number(number);
     console.log('Calculator value: ' + initialValue);
     setNumber(result);
     console.log('Final answer: ' + result);
   } 

  
  return (
    <div className='project_body'>
      <Head/>
      <Output myNumber= {number}/>
      <Body showNumber = {showNumber} plus = {plus} equalto = {equalto}/>
    </div>
  );
}

export default App;

