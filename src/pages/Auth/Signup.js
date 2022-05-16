import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
      <div>
      <div className='container font-Poppins'>
        <div className='w-1/2 bg-bkwhite shadow rounded-lg p-20 my-20 mx-auto'>
          
          <h2 className='mb-6 text-bkpurple text-xl font-semibold text-center'>Sign Up</h2>
          <form >
            <input className='border bg-transparent focus:outline-none border-bkpurple mb-2 w-full p-2 rounded-md placeholder: text-xs' placeholder='Fullname' ></input>
            <input className='border bg-transparent focus:outline-none border-bkpurple mb-2 w-full p-2 rounded-md placeholder: text-xs' placeholder='Email' ></input>
            <input className='border bg-transparent focus:outline-none border-bkpurple mb-2 w-full p-2 rounded-md placeholder: text-xs' placeholder='Phone Number' ></input>
            <input className='border bg-transparent focus:outline-none border-bkpurple mb-2 w-full p-2 rounded-md placeholder: text-xs' placeholder='Job title' ></input>
            <input className='border bg-transparent focus:outline-none border-bkpurple mb-2 w-full p-2 rounded-md placeholder: text-xs' placeholder='Password' ></input>
            <input className='border bg-transparent focus:outline-none border-bkpurple mb-2 w-full p-2 rounded-md placeholder: text-xs' placeholder='Confirm Password' ></input>
            <Link to='/dashboard'><button className='btn btn-purple w-full hover:bg-bkwhite hover:text-bkpurple'>Sign up</button></Link>
          </form>
          <p className='text-bkgrey text-xs mt-5 text-center'>Already have an account? <Link to='/login' className='underline hover:text-bkpurple'>Sign in</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Signup