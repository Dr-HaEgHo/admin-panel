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
    const handleHome = () => {
        window.location = '/dashboard';
    }
    const handleTeams = () => {
        window.location = '/dashboard/teams';
    }
    const handleClients = () => {
        window.location = '/dashboard/clients';
    }
    const handleProducts = () => {
        window.location = '/dashboard/products';
    }
  

    const location = window.location.pathname;
    console.log(location);

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
                  <button className={location === "/dashboard" ? "clicked" : "not-clicked"}  onClick={handleHome} ><i className='fa fa-home'></i><p>Home</p></button>
                  <button className={location === "/dashboard/teams" ? "clicked" : "not-clicked"} onClick={handleTeams}><i className='fa fa-users'></i><p>Team Members</p></button>
                  <button className={location === "/dashboard/clients" ? "clicked" : "not-clicked"} onClick={handleClients}><i className='fa fa-user-plus'></i><p>Clients</p></button> 
                  <button className={location === "/dashboard/products" ? "clicked" : "not-clicked"} onClick={handleProducts} ><i className='fa fa-shopping-bag'></i><p>Products</p></button>
              </div>
              <div className='py-10'>
                  <button onClick={handleLogout} className='w-full text-left text-xs px-5 bg-bkdeepblue py-4 focus:bg-[rgba(255,255,255,0.3)] border-bkwhite focus:border-l-4   hover:bg-[rgba(255,255,255,0.2)] duration-300 flex gap-6 items-center '><i className='fa fa-sign-out'></i> Log Out</button>
              </div>
          </div>
  )
}

export default SideBar