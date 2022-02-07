import Button from './Button'
import { useState } from 'react';
import Output from '../Output';

const Body = ({showNumber, plus, equalto, minus, multiply, divide, reset, del, className, deleteButtonClassname, resetButtonClassname, equalButtonClassname, gridItemClassname}) => {


    return (
        <div className= {className} >
    {/* </div>/<div className = {switchToggle? 'calc_body' : 'calc_body2'}> */}
            <Button no7 = '7' onClick = {() => showNumber('7')} gridItemClassname = {gridItemClassname}/>
            <Button no8= '8' onClick = {() => showNumber('8')} gridItemClassname = {gridItemClassname}/>
            <Button no9 = '9' onClick = {() => showNumber('9')} gridItemClassname = {gridItemClassname}/>
            <Button Del = 'DEL' id= {deleteButtonClassname} onClick={del} gridItemClassname = {gridItemClassname}/>
            <Button no4 = '4' onClick = {() => showNumber('4')} gridItemClassname = {gridItemClassname}/>
            <Button no5 = '5' onClick = {() => showNumber('5')} gridItemClassname = {gridItemClassname}/>
            <Button no6 = '6' onClick = {() => showNumber('6')} gridItemClassname = {gridItemClassname}/>
            <Button add = '+' onClick={plus} gridItemClassname = {gridItemClassname}/>
            <Button no1 = '1' onClick = {() => showNumber('1')} gridItemClassname = {gridItemClassname}/>
            <Button no2 = '2' onClick = {() => showNumber('2')} gridItemClassname = {gridItemClassname}/>
            <Button no3 = '3' onClick = {() => showNumber('3')} gridItemClassname = {gridItemClassname}/>
            <Button minus = '-' onClick={minus} gridItemClassname = {gridItemClassname}/>
            <Button dot = '.' onClick = {() => showNumber('.')} gridItemClassname = {gridItemClassname}/>
            <Button no0 = '0' onClick = {() => showNumber('0')} gridItemClassname = {gridItemClassname}/>
            <Button divide = '/' onClick={divide} gridItemClassname = {gridItemClassname}/>
            <Button multiply = '×' onClick={multiply} gridItemClassname = {gridItemClassname}/>
            <Button Reset = 'RESET'  id = {resetButtonClassname} onClick={reset} gridItemClassname = {gridItemClassname}/>
            <Button Equal = '=' id = {equalButtonClassname} onClick={equalto} gridItemClassname = {gridItemClassname}/>
        </div>
        
    )
}

export default Body
