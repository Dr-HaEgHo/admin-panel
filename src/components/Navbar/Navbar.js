import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <div className='text-Poppins '>
          <div className='container flex justify-between my-4 items-center'>
              <Link to='/'>
                <div className=''>
                  <h1 className='font-Poppins text-xl font-bold text-bkpurple'>41-Reader</h1>
              </div>
              </Link>
              <div className='flex gap-6'>
                  <Link to='/login'><button className='btn  btn-purple hover:bg-bkwhite hover:text-bkpurple font-Poppins'>Login</button></Link>
                  <Link to='/signup'><button className='btn btn-white text-bkpurple hover:bg-bkpurple hover:text-bkwhite font-Poppins'>Sign Up</button></Link>
              </div>
          </div>
    </div>
  )
}

export default Navbar;