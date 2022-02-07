import React, {useState} from 'react'
import Title from './Title'
import Tg from '../ToggleButton/Tg'

const Head = ({ToggleClick, className, titleClassname, themeClassname, switchClassname}) => {


    return (
        <div className='head'>
            <Title titleClassname = {titleClassname}/>
            <Tg label = 'THEME' ToggleClick = {ToggleClick} className= {className} themeClassname={themeClassname} switchClassname={switchClassname}/>
            {/* <Toogle isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)}/> */}
        </div>
    )
}

export default Head
