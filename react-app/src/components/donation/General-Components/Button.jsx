function Button({ text, onClick }) {
    return (
        <div>
            <button className='form-control donationsBtn' onClick={onClick}>{text}</button>
        </div>
    );
}

export default Button;