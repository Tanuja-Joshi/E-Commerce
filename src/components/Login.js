import React, { useState } from 'react'
import '../Main.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const handleClick = () => {
    navigate('/register');
  }
  const date = new Date()
  const year = date.getFullYear()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login',  {email,password })
      .then(result => {
        if (result.data === 'success') {
          navigate('/home')
        }
      })
      .catch(err => console.log(err));
  }
  return (
    <>
      <br />
      <div className=' d-grid gap-6 col-9 mx-auto'>
        <img className='mx-auto' src="./veduja3.png" alt="logo" />
      </div><br />
      <div className='mainpage d-grid gap-2 col-6 mx-auto'>
        <h2 className='d-grid gap-2 col-9 mx-auto'>Sign in</h2>
        <div className='d-grid gap-2 col-9 mx-auto'>
          <label htmlFor='email'>Email</label>
          <input className="form-control" type="email" maxLength="128" name="email" tabIndex="1" onChange={(e)=>setEmail(e.target.value)} />
          <label htmlFor='password'>Password</label>
          <input className="form-control" type="password" maxLength="128" name="password" tabIndex="1" onChange={(e)=>setPassword(e.target.value)}/>
          <button type="submit" className="btn button" onClick={handleSubmit}>Continue</button>
          <p>By continuing, you agree to Tango's Conditions of Use and Privacy Notice.</p>
          <p className='para'>New to Tango?</p>
          <button type="button" className="btn button1" onClick={handleClick}>Create your Tango account</button>
        </div><br />
      </div> <br />
      <hr />
      <div >
        <p className=' para'>Conditions of Use  Privacy Notice  Help</p>
        <p className='para'>© 2023-{year}, Tango.com, Inc. or its affiliates</p>
      </div>
    </>
  )
}
export default Login
