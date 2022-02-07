import Body from './components/calc_body/Body'
import Head from './components/head_section/Head';
import Output from './components/Output';
import { useState, useEffect } from 'react';


const App = () => {

  // document.body.style.backgroundColor = 'green';

  const [switchToggle, setSwitchToggle] = useState(true);

  const ToggleClick = () => {
  
    switchToggle ? setSwitchToggle(false) : setSwitchToggle(true);

    console.log(switchToggle);
  }

  switchToggle ? document.body.style.backgroundColor = 'hsl(222, 26%, 31%)' : document.body.style.backgroundColor = 'hsl(0, 0%, 90%)';

  let displayedNumber = '0';
  const [number, setNumber] = useState(displayedNumber);
  const [initialValue, setInitialValue] = useState(() => {});
  const [myArray, setMyArray] = useState([])
  let T;
  // const []
  useEffect (() => {
    // console.log(eval("5 +" + "12") )
    console.log(myArray);
    // console.log('Number is now: ' + number);
  })

  const showNumber = (n) => {

    if(number === '0' && n === '.'){
      displayedNumber = number + n;
      setNumber(displayedNumber)
    }else if(number === '0'){
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
    setNumber(T.toString());
    setMyArray([])
    
  }


  const reset = () => {
    setNumber('0');
    setMyArray([]);
  };


  const del = () => {
    
    if(number === '') {
      setNumber('0')
    }else{
      let del = number.substring(0, number.length - 1 );
      setNumber(del)
    }
  }

  
  return (
    <div className='project_body'>
      <Head 
            ToggleClick = {ToggleClick} 
            className = {switchToggle? 'inner': 'inner2' } 
            titleClassname = {switchToggle? 'title' : 'title2'}
            themeClassname={switchToggle? 'myTheme' : 'myTheme2'}
            switchClassname={switchToggle? 'switch': 'switch2'}
            />
      <Output myNumber= {number} className = {switchToggle? 'form': 'form2' }/>
      <Body 
            showNumber = {showNumber} 
            plus = {plus} 
            minus = {minus} 
            equalto = {equalto} 
            multiply = {multiply} 
            divide = {divide} 
            reset = {reset}
            del = {del}
            className = {switchToggle? 'calc_body': 'calc_body2'}
            deleteButtonClassname ={switchToggle? 'deleteButton' : 'deleteButton2'}
            resetButtonClassname ={switchToggle? 'resetButton' : 'resetButton2'}
            equalButtonClassname ={switchToggle? 'equalButton' : 'equalButton2'}
            gridItemClassname = {switchToggle? 'grid-item' : 'grid-item2'}

      />
    </div>
  );
}

export default App;

