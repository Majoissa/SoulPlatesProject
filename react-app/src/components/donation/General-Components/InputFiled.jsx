function InputFiled({type, name = "", id = "", placeholder = "", value = "", onChange, className = "form-control",}) {
    //mandatory properties has to written, props is generic we need to defend
    return (
        <>
            <div className='donor-details'>
                <input
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                  /*  defaultValue=""*/
                    onChange={onChange}
                    className={className}/>
            </div>
        </>
    )
}

export default InputFiled