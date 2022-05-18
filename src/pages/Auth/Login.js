import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [errorMsg, setErrorMsg] = useState('')
    const [formValid, setFormValid] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [isUser, setIsUser] = useState(false)
    const [form, setForm] = useState({
        email : "",
        password : "",
    })

    // sessionStorage.setItem('userDetails', JSON.stringify({ ...form }))

    const logDets = JSON.parse(sessionStorage.getItem('userDetails'));
    

    // console.log(logDets)

    useEffect(() => {
        if (
            form.email !== '' && form.password !== ''
        ) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }

        if (form.email === logDets.email) {
            setIsUser(true);
        } else {
            setIsUser(false);
        }

        if (form.password == logDets.password) {
            setIsPassword(true);
        } else {
            setIsPassword(false);
        }

        console.log(form)
        console.log('formValid:' + formValid)
        console.log("email check:" + form.email + logDets.email + " :"+ isUser);
    },[form.email, form.password])
    

    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name] : e.target.value
        })
        
    }

    const submitHandler = (e) => {
        // if (!formValid ) {
        //     setErrorMsg('Please fill all fields')
        // } else if (!isPassword) {
        //     setErrorMsg('Incorrrect password please');
        // } else if (!isUser) { 
            
        //     setErrorMsg("You don't have an account, would you like to sign up");
        //     alert('errorMsg');
        //     window.location='/signup'
        // } else {
        //     window.location='/dashboard'
        // }
        if (!formValid) {
            setErrorMsg('Please fill all fields');
        } else if (!isUser) {
            setErrorMsg('This user does not exist, all inputs are case sensitive')
        }else if(!isPassword){
            setErrorMsg('You have entered an incorrect password');
        } else {
            window.location='/dashboard'
         }


        e.preventDefault()
    }
    

    // protected void Page_Init(object Sender, EventArgs e){
    // Response.Cache.SetCacheability(HttpCacheability.NoCache);
    // Response.Cache.SetExpires(DateTime.Now.AddSeconds(-1));
    // Response.Cache.SetNoStore();
    // }


  return (
      <div>
      <div className='container font-Poppins'>
        <div className='w-1/2 bg-bkwhite shadow shadow-bkdeepblue/[.4] rounded-lg p-20 my-20 mx-auto'>
          
          <h2 className='mb-6 text-bkdeepblue text-xl font-semibold text-center'>Login</h2>
          <form onSubmit={submitHandler}>
            <input className='border bg-transparent focus:outline-none mb-2 w-full p-2 rounded-md invalid:border-bkred  placeholder: text-xs' onChange={handleChange} type='email' name='email' placeholder='Email'></input>
            <input className='border bg-transparent focus:outline-none mb-2 w-full p-2 rounded-md placeholder: text-xs' name='password' type='password' onChange={handleChange} placeholder='Password'></input>
            <p className='text-bkred text-xs mb-2 italic'>{ errorMsg }</p>
            <button type='submit' className='btn btn-deepblue w-full hover:bg-bkwhite hover:text-bkdeepblue text-xs'>Log in</button>
          </form>
          <p className='text-bkgrey text-xs mt-5 text-center'>Don't have an account yet? <Link to='/signup' className='underline hover:text-bkdeepblue'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login;