function Title({title, subtitle}) {
    return (
        <>
            <div className='sectionTitle'>
                <h4 className='title'>{title}</h4>
                {subtitle ? <p className={'subtitle'}>{subtitle}</p> : null}
            </div>
        </>
    )
}

export default Title;

