function Button({ text, type, onClick}) {
    return (
        <div>
            <button type={type} className='form-control donationsBtn' onClick={onClick} >{text}</button>
        </div>
    );
}

export default Button;