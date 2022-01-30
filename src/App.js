import Body from './components/calc_body/Body'
import Head from './components/head_section/Head';
import Output from './components/Output';
import { useState, useEffect } from 'react';



const App = () => {

  let displayedNumber = '0';
  const [number, setNumber] = useState(displayedNumber);
  const [initialValue, setInitialValue] = useState(() => {});
  const [myArray, setMyArray] = useState([])
  const [result, setResult] = useState('')
  let T;
  // const []
  useEffect (() => {
    // console.log(eval("5 +" + "12") )
    console.log(myArray);
    console.log('Number is now: ' + number)
        // let P = myArray.join('');
        // setResult( () =>  Function ('return ' + P)() );
        // console.log(result);

  })

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
    
    if (myArray.length >= 1) {
      myArray.push(number)
      let P = myArray.join('');
      T = Function('return ' + P)();
      setNumber('');
      setMyArray([T + ' + '])
    } else {
      setNumber('');
      myArray.push(number + ' + ');
    }
  }

  const minus = () => {
    // setNumber('')
    // myArray.push(number + ' - ')

    if (myArray.length >= 1) {
      myArray.push(number)
      let P = myArray.join('');
      T = Function('return ' + P)();
      setNumber('');
      setMyArray([T + ' - '])
    } else {
      setNumber('');
      myArray.push(number + ' - ');
    }
  }

  const multiply = () => {

    if (myArray.length >= 1) {
      myArray.push(number)
      let P = myArray.join('');
      T = Function('return ' + P)();
      setNumber('');
      setMyArray([T + ' * '])
    } else {
      setNumber('');
      myArray.push(number + ' * ');
    }
  }

  const divide = () => {

    if (myArray.length >= 1) {
      myArray.push(number)
      let P = myArray.join('');
      T = Function('return ' + P)();
      setNumber('');
      setMyArray([T + ' / '])
    } else {
      setNumber('');
      myArray.push(number + ' / ');
    }
  }


  const equalto = () => {
    setNumber('')
    myArray.push(number)
    let P = myArray.join('');
    let T = Function('return ' + P)();
    // console.log (eval(P));
    console.log(T);
    setNumber(T);
    setMyArray([])
    
  }


  const reset = () => {
    setNumber('0')
  };


  const del = () => {
    // let del = number.pop();
    // console.log(number.length)
    let del = number.substring(0, number.length - 1 );
    setNumber(del)
    console.log(del)
  }





  
  return (
    <div className='project_body'>
      <Head/>
      <Output myNumber= {number}/>
      <Body showNumber = {showNumber} 
            plus = {plus} 
            minus = {minus} 
            equalto = {equalto} 
            multiply = {multiply} 
            divide = {divide} 
            reset = {reset}
            del = {del}/>
    </div>
  );
}

export default App;

