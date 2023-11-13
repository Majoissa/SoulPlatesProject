function Button({ text, type }) {
    return (
        <div>
            <button type={type} className='form-control donationsBtn'>{text}</button>
        </div>
    );
}

export default Button;