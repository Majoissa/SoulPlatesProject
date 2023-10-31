function Button({ text, onClick }) {
    return (
        <div>
            <button className='form-control-donat-naw' onClick={onClick}>{text}</button>
        </div>
    );
}

export default Button;