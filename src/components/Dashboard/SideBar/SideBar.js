import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Girl1 from '../../../assets/girl1.jpg'


const SideBar = () => {

    const loggedDets = JSON.parse(sessionStorage.getItem('userDetails'));

    const [isLoggedOut, setIsLoggedOut] = useState(false);

    const handleLogout = () => {
        window.location = '/login';
        // sessionStorage.clear();
        setIsLoggedOut(true)
    }

  return (
      <div className='h-screen w-[23%] fixed  bg-bkdeepblue pt-10'>
              <div id='user' className='flex flex-col items-center border-b border-[rgba(255,255,255,0.2)] w-[77%] mx-auto pb-10'>
                  <div className='w-[60px] h-[60px] rounded-full overflow-hidden mb-2'>
                      <img src={Girl1} alt='girl-sticking-out-tongue.jpg'></img>
                  </div>
                    <h3 className='font-semibold text-sm'>{ loggedDets.fullname }</h3>
                    <p className='text-xs'>{ loggedDets.jobTitle }</p>
              </div>
              <div className='py-10 text-xs flex flex-col'>
                  <button className='w-full text-left px-5 bg-bkdeepblue py-4 focus:bg-[rgba(255,255,255,0.3)] border-bkwhite focus:border-l-4 hover:bg-[rgba(255,255,255,0.2)] duration-300 flex gap-6 items-center ' ><i className='fa fa-home'></i><p>Home</p></button>
                  <Link to='/dashboard/teams'><button className='w-full text-left px-5 bg-bkdeepblue py-4 focus:bg-[rgba(255,255,255,0.3)] border-bkwhite focus:border-l-4  hover:bg-[rgba(255,255,255,0.2)] duration-300 flex gap-6 items-center'><i className='fa fa-users'></i><p>Team Members</p></button></Link>
                  <button className='w-full text-left px-5 bg-bkdeepblue py-4 focus:bg-[rgba(255,255,255,0.3)] border-bkwhite focus:border-l-4  hover:bg-[rgba(255,255,255,0.2)] duration-300 flex gap-6 items-center' ><i className='fa fa-user-plus'></i><p>Clients</p></button> 
                  <button className='w-full text-left px-5 bg-bkdeepblue py-4 focus:bg-[rgba(255,255,255,0.3)] border-bkwhite focus:border-l-4  hover:bg-[rgba(255,255,255,0.2)] duration-300 flex gap-6 items-center'  ><i className='fa fa-shopping-bag'></i><p>Products</p></button>
              </div>
              <div className='py-10'>
                  <button onClick={handleLogout} className='w-full text-left text-xs px-5 bg-bkdeepblue py-4 focus:bg-[rgba(255,255,255,0.3)] border-bkwhite focus:border-l-4   hover:bg-[rgba(255,255,255,0.2)] duration-300 flex gap-6 items-center '><i className='fa fa-sign-out'></i> Log Out</button>
              </div>
          </div>
  )
}

export default SideBar