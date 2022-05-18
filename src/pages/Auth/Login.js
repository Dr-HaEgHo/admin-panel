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
    // console.log(logDets)
    
    useEffect(() => {
        const logDets = JSON.parse(sessionStorage.getItem('userDetails'))
        
        if (
            form.email !== '' && form.password !== ''
        ) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }

        if (!logDets) {
            setIsUser(false);
        } else if (logDets) {
            setIsUser(true)
        }

        if (!logDets) {
            setIsPassword(false);
        } else if (logDets) {
            setIsPassword(true);
        }
        console.log(logDets)
        console.log(isPassword)
        console.log(isUser)
    }, [form.email, form.password])
    

    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name] : e.target.value
        })
        
    }

    const submitHandler = (e) => {
        const logDets = JSON.parse(sessionStorage.getItem('userDetails'))

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
        } else if (isUser === true && form.email !== logDets.email) {
            setErrorMsg('This user does not exist, would you like to sign up?')
        }else if(isPassword ===true && form.password !== logDets.password){
            setErrorMsg('You have entered an incorrect password');
        } else if (isPassword === true && form.password === logDets.password) {
            console.log('you can sign in')
            window.location='/dashboard'
        }
        

        if (!logDets) {
            setErrorMsg("User doesn't exist, please sign up")
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