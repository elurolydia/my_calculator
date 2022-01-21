

const Button = ({ no7, no8, no9, Del, no4, no5, no6, add, no1, no2, no3, minus, dot, no0, divide, multiply, Reset, Equal, id}) => {


    return (
        <button 
        className="grid-item" id={id}
        >
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
