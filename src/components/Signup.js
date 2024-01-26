import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  const [name,setName]=useState()
  const [number,setNumber]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate=useNavigate()
  const date = new Date()
  const year = date.getFullYear()
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, number, email, password };
    console.log(data); // Log the data to check if it's correct
    axios.post('http://localhost:5000/register', data)
      .then(result => {console.log(result)
      navigate('/login')
  })
      .catch(err => console.log(err));
  }
  return (
    // <div>
       <>
             <br />
      <div className=' d-grid gap-6 col-9 mx-auto'>
        <img className='mx-auto' src="./veduja3.png" alt="logo" />
      </div><br />
    <div className='mainpage d-grid gap-2 col-6 mx-auto'>
        <h2 className='d-grid gap-2 col-9 mx-auto'>Create Account</h2>        
        <div className='d-grid gap-2 col-9 mx-auto'>
        <label htmlFor='name'>Your name</label>
        <input className="form-control" type="name" maxLength="128" name="name" tabIndex="1" onChange={(e)=>setName(e.target.value)}/>
        <label htmlFor='email'>Mobile number (optional)</label>
        <input className="form-control" type="email" maxLength="128" name="email" tabIndex="1" placeholder='Mobile number'onChange={(e)=>setNumber(e.target.value)}/>
        <label htmlFor='email'>Email</label>
        <input className="form-control" type="email" maxLength="128" name="email" tabIndex="1" onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor='password'>Password</label>
        <input className="form-control" type="password" maxLength="128" name="password" tabIndex="1" onChange={(e)=>setPassword(e.target.value)}/>
        <i className="bi bi-info"></i>
        <p>Passwords must be at least 6 characters.</p>
        <p>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p>
        <button type="submit" className="btn button" onClick={handleSubmit}>Sign up</button>
        <p>By creating an account or logging in, you agree to Tango’s Conditions of Use and Privacy Policy.</p>
        <p className='para'>Already have an account?</p> 
        <Link className='mx-auto' to='/login'>Sign in</Link>     
        </div><br/>
      </div> <br/> 
      <hr/>
      <div >
        <p className=' para'>Conditions of Use  Privacy Notice  Help</p>
        <p className='para'>© 2023-{year}, Tango.com, Inc. or its affiliates</p>
      </div>
    </>
  )
}

export default Signup
