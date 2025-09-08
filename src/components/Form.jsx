import React, { useState } from 'react'

const Form = () => {
const [username, setUsername] = useState('');
const [email, setEmail]=useState('');
const [password, setPassword]=useState('');
const [confirmPassword, setConfirmPassword]=useState('');

const [errorUsername, setErrorUsername] = useState('');
const [errorEmail, setErrorEmail]=useState('');
const [errorPassword, setErrorPassword]=useState('');
const [errorConfirmPassword, setErrorConfirmPassword]=useState('');


const [userColor, setUserColor]=useState('');
const [emailColor, setEmailColor]= useState('');
const[passwordColor, setPasswordColor]=useState('');
const[confirmPasswordColor, setConfirmPasswordColor]=useState('');

const validate =(e)=>{
    e.preventDefault();

    if (username.length >= 4 ){
        setErrorUsername('')
        setUserColor('green')
    }else{
            setErrorUsername('user name must be at least 4 letters long')
            setUserColor('red')
    } 

    if(email.includes('@')){
        setErrorEmail('')
        setEmailColor('green')
    }else {
        setErrorEmail('email must include an @')
        setEmailColor('red')
    }
    if (password.length >= 8){
        setErrorPassword('')
        setPasswordColor('green')
    }else{
        setErrorPassword('password must be at least 8 characters long')
        setPasswordColor('red')
    }
    if(password !== '' &&  confirmPassword === password){
        setErrorConfirmPassword('')
        setConfirmPasswordColor('green')
    }else {
        setErrorConfirmPassword('Passwords dont match')
        setConfirmPasswordColor('red')
    }



}

  return <>
  <div className="form-container">
        <div className='card'>
            <div className='card-image'></div>
             <form>
                <input type="text"  placeholder='name' style={{borderColor:userColor}} value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <p className="error">{errorUsername}</p>
                <input type="text"  placeholder='Email' style={{borderColor:emailColor}} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  <p className="error">{errorEmail}</p>
                <input type="text"  placeholder='Password' style={{borderColor:passwordColor}} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                  <p className="error">{errorPassword}</p>
                <input type="text"  placeholder='Confirm Password' style={{borderColor:confirmPasswordColor}} value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                  <p className="error">{errorConfirmPassword}</p>
                  <button className="submit-btn" onClick={validate}>Submit</button>
             </form>

        </div>
    </div>

    </>
  
}

export default Form