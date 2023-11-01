function Message({value='', onChange}) {
    return (
        <>
            <div className='cal-12'>
                <div>
                    <h5>Message</h5>
                    <textarea
                        value={value}
                        name='message'
                        placeholder="Enter your message"
                        className='form-control donations textarea'
                        onChange={onChange} />
                </div>
            </div>
        </>
    )
}

export default Message;