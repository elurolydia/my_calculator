import React, {useState} from 'react'
import Title from './Title'
import Tg from '../ToggleButton/Tg'

const Head = () => {


    return (
        <div className='head'>
            <Title/>
            <Tg label = 'THEME'/>
            {/* <Toogle isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)}/> */}
        </div>
    )
}

export default Head
