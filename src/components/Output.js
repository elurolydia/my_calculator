import React from 'react';


const Output = ({myNumber, className}) => {
    return (
        // <form className='output'>
        //     <input type= 'number' className='form' placeholder='0'/>   
        // </form>
        <div className={className}>
            {myNumber}
        </div>
    )
}

export default Output
