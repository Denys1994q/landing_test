import './Button.sass'

const Button = ({btnText, primary, secondary}) => {
    return (
        <>
            {primary && <button className='btn btn-medium btn-yellow'>{btnText}</button>}
            {secondary && <button className='btn btn-medium btn-transparent'>{btnText}</button>}
            {!primary && !secondary && <button className='btn'>{btnText}</button>}
        </>
    )
}

export default Button