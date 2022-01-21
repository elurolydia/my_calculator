import React, {useState} from 'react';
import './toogle.css';
import cx from 'classnames'

const Toogle = ( {rounded = true, isToggled, onToggle} ) => {

    const slCx = cx('sl', {

        'rounded' : rounded
    })
    return (

        <label className='sw'>
            <p>Theme</p>
            <input type='checkbox' checked={isToggled} onChange={onToggle}/>
            <span className={slCx}/>
        </label>


        // <>
        //     <section>
        //         <input type='checkbox'/>
        //     </section>
        // </>
    )
}

export default Toogle
