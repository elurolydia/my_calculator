import Button from './Button'
import { useState } from 'react';
import Output from '../Output';

const Body = ({showNumber}) => {


    return (
        <div className='calc_body'>
            <Button no7 = '7' onClick = {() => showNumber(7)}/>
            <Button no8= '8' onClick = {() => showNumber(8)}/>
            <Button no9 = '9' onClick = {() => showNumber(9)}/>
            <Button Del = 'DEL' id= 'delete' onClick = {() => showNumber('delete')}/>
            <Button no4 = '4' onClick = {() => showNumber(4)}/>
            <Button no5 = '5' onClick = {() => showNumber(5)}/>
            <Button no6 = '6' onClick = {() => showNumber(6)}/>
            <Button add = '+' onClick = {() => showNumber('+')}/>
            <Button no1 = '1' onClick = {() => showNumber(1)}/>
            <Button no2 = '2' onClick = {() => showNumber(2)}/>
            <Button no3 = '3' onClick = {() => showNumber(3)}/>
            <Button minus = '-'/>
            <Button dot = '.'/>
            <Button no0 = '0' onClick = {() => showNumber(0)}/>
            <Button divide = '/'/>
            <Button multiply = '×'/>
            <Button Reset = 'RESET'  id = 'specialButton'/>
            <Button Equal = '=' id = 'specialButton2'/>
        </div>
        
    )
}

export default Body
