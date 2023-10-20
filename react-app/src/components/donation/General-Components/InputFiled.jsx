function InputFiled(props) {
    return (
        <>
            <div className='donor-details'>
                <input type='text' placeholder={props.myPlaceholder}
                       onChange={props.handleChange} className={'form-control'}/>
            </div>
        </>
    )
}

export default InputFiled



