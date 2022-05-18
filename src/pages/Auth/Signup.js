import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {


  const [errorMsg, setErrorMsg] = useState('');
  const [data, setData] = useState({});
  const [formValid, setFormValid] = useState(false);
  const [passwordValid, setpasswordValid] = useState(false);
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    jobTitle: "",
    password: "",
    confirmPassword: ""
  });

   sessionStorage.setItem('userDetails', JSON.stringify({ ...form }))
  

  useEffect(() => {
    if (
      form.fullname !== "" &&
      form.email !== "" &&
      form.phoneNumber !== "" &&
      form.jobTitle !== "" &&
      form.password !== "" &&
      form.confirmPassword !== ""
    ) {
      setFormValid(true);
    } else {
      setFormValid(false)
    }
    console.log({ ...form });
  }, [{ ...form }]);

  useEffect(() => {
    if (form.password === form.confirmPassword && form.password !== "") {
      setpasswordValid(true);
      // setFormValid(true);
    } else {
      setpasswordValid(false);
      // setFormValid(false);
    }
    console.log(formValid);
    console.log(passwordValid);
  },[form.fullname,
      form.email,
      form.phoneNumber,
      form.jobTitle,
      form.password,
      form.confirmPassword]);
  

  const handleChange = (e) => {
    setForm({
      ...form, 
      [e.target.name]: e.target.value
    })

  }

  

  const submitHandler = (e) => {
    // const errorMsg = document.getElementById('error-msg')
    if (!formValid) {
      setErrorMsg('Please fill all fields');
    } else if (!passwordValid) {
      setErrorMsg('Passwords do not tally')
    } else {
      setErrorMsg('')
      window.location = '/dashboard'
    }
    setData({ ...form })

    sessionStorage.setItem('userDetails', JSON.stringify({...form}));

    e.preventDefault();
  }

  const togglePasswordVisibility = () => {
    const pwd = document.getElementById('pwd')
    const Cpwd = document.getElementById('c-pwd')

    if (pwd.type && Cpwd.type === "password") {
      pwd.type = 'text'
      Cpwd.type = 'text'
    } else {
      pwd.type = 'password'
      Cpwd.type = 'password'
    }
  }




  return (
      <div>
      <div className='container font-Poppins'>
        <div className='w-1/2 bg-bkwhite shadow shadow-bkdeepblue/[.40] rounded-lg p-20 my-20 mx-auto'>
          
          <h2 className='mb-6 text-bkdeepblue text-xl font-semibold text-center'>Sign Up</h2>
          <form onSubmit={submitHandler}>
            {/* <input className={ formValid ? "good" : "bad" } onChange={handleChange} name='fullname' placeholder='Fullname' ></input> */}
            <input className='border bg-transparent focus:outline-none mb-2 w-full p-2 rounded-md placeholder: text-xs' onChange={handleChange} name='fullname' placeholder='Fullname' ></input>
            <input className='border bg-transparent focus:outline-none mb-2 w-full p-2 rounded-md placeholder: text-xs invalid:border-bkred' onChange={handleChange} name='email' type='email' placeholder='Email' ></input>
            <input className='border bg-transparent focus:outline-none mb-2 w-full p-2 rounded-md placeholder: text-xs' onChange={handleChange} name='phoneNumber' placeholder='Phone Number' ></input>
            <input className='border bg-transparent focus:outline-none mb-2 w-full p-2 rounded-md placeholder: text-xs' onChange={handleChange} name='jobTitle' placeholder='Job title' ></input>
            <input className='border bg-transparent focus:outline-none mb-2 w-full p-2 rounded-md placeholder: text-xs' onChange={handleChange} name='password' type='password' id='pwd' placeholder='Password'></input>
            <input className='border bg-transparent focus:outline-none mb-2 w-full p-2 rounded-md placeholder: text-xs' onChange={handleChange} name='confirmPassword' type='password' id='c-pwd' placeholder='Confirm Password' ></input>
            <input type='checkbox' onClick={togglePasswordVisibility} className='mb-3'></input><span className='text-xs text-bkgrey mx-2 '>Show Passwords</span>
            <p className='text-bkred text-xs mb-2 italic'>{ errorMsg }</p>
            <button type='submit' className='btn btn-deepblue w-full hover:bg-bkwhite hover:text-bkdeepblue'>Sign up</button>
          </form>
          <p className='text-bkgrey text-xs mt-5 text-center'>Already have an account? <Link to='/login' className='underline hover:text-bkdeepblue'>Sign in</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Signup