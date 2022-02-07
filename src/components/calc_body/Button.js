

const Button = ({ no7, no8, no9, Del, no4, no5, no6, add, no1, no2, no3, minus, dot, no0, divide, multiply, Reset, Equal, id, onClick, gridItemClassname}) => {



    return (
        <button className={gridItemClassname} id={id} onClick={onClick}>
            {no7}
            {no8}
            {no9}
            {Del}
            {no4}
            {no5}
            {no6}
            {add}
            {no1}
            {no2}
            {no3}
            {minus}
            {dot}
            {no0}
            {divide}
            {multiply}
            {Reset}
            {Equal}
        </button>
    )
}

export default Button
