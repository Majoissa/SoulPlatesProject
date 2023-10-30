function Button({text, onClick,}) {

   /* function donateButton(){
     /!* This button supos to to send form to the server!
     * How this button connect to the server *!/
        console.log('Im working');
    }*/


    return (
        <div>
            <button type='button' className='form-control-donat-naw' onClick={onClick}>{text} </button>
        </div>
    )
}

export default Button