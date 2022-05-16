import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
      <div>
      <div className='container font-Poppins'>
        <div className='w-1/2 bg-bkwhite shadow rounded-lg p-20 my-20 mx-auto'>
          
          <h2 className='mb-6 text-bkpurple text-xl font-semibold text-center'>Login</h2>
          <form >
            <input className='border bg-transparent focus:outline-none border-bkpurple mb-2 w-full p-2 rounded-md placeholder: text-xs' placeholder='Email' ></input>
            <input className='border bg-transparent focus:outline-none border-bkpurple mb-2 w-full p-2 rounded-md placeholder: text-xs' placeholder='Password' ></input>
            <Link to='/dashboard'><button className='btn btn-purple w-full hover:bg-bkwhite hover:text-bkpurple text-xs'>Sign up</button></Link>
          </form>
          <p className='text-bkgrey text-xs mt-5 text-center'>Don't have an account yet? <Link to='/signup' className='underline hover:text-bkpurple'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login