import Button from './Button'

const Body = (f) => {
    return (

        
        <div className='calc_body'>
            <Button no7 = '7'/>
            <Button no8= '8'/>
            <Button no9 = '9'/>
            <Button Del = 'DEL' id= 'delete'/>
            <Button no4 = '4'/>
            <Button no5 = '5'/>
            <Button no6 = '6'/>
            <Button add = '+'/>
            <Button no1 = '1'/>
            <Button no2 = '2'/>
            <Button no3 = '3'/>
            <Button minus = '-'/>
            <Button dot = '.'/>
            <Button no0 = '0'/>
            <Button divide = '/'/>
            <Button multiply = '×'/>
            <Button Reset = 'RESET'  id = 'specialButton'/>
            <Button Equal = '=' id = 'specialButton2'/>
        </div>
        
    )
}

export default Body
