import React, { useEffect, useState } from 'react'
import Girl1 from '../../assets/girl1.jpg'
import DashHome from '../Home/DashHome'
import Clients from './Clients/Clients'
import Products from './Products/Products'
import Teams from './Teams/Teams'

const Dashboard = () => {

    
    const showDash = (e) => {
        

        const dash = document.getElementById('dashboard')
        const teams = document.getElementById('teams')
        const client = document.getElementById('clients')
        const prods = document.getElementById('products')
        dash.classList.remove('hidden');

        if (!dash.classList.contains('hidden')) {
            teams.classList.add('hidden')
            client.classList.add('hidden')
            prods.classList.add('hidden')
        }
    }
    const showTeams = () => {
        const dash = document.getElementById('dashboard')
        const teams = document.getElementById('teams')
        const client = document.getElementById('clients')
        const prods = document.getElementById('products')
        teams.classList.remove('hidden')

        if (!teams.classList.contains('hidden')) {
            dash.classList.add('hidden')
            client.classList.add('hidden')
            prods.classList.add('hidden')
        }
    }
    const showClients = () => {
        const dash = document.getElementById('dashboard')
        const teams = document.getElementById('teams')
        const prods = document.getElementById('products')
        const client = document.getElementById('clients')
        client.classList.remove('hidden')

        if (!client.classList.contains('hidden')) {
            teams.classList.add('hidden')
            dash.classList.add('hidden')
            prods.classList.add('hidden')
        }
    }
    const showProds = () => {
        const dash = document.getElementById('dashboard')
        const teams = document.getElementById('teams')
        const client = document.getElementById('clients')
        const prods = document.getElementById('products')
        prods.classList.remove('hidden')

        if (!prods.classList.contains('hidden')) {
            teams.classList.add('hidden')
            client.classList.add('hidden')
            dash.classList.add('hidden')
        }
    }

    


    const [isLoggedOut, setIsLoggedOut] = useState(false);

    const loggedDets = JSON.parse(sessionStorage.getItem('userDetails'));
    // console.log(loggedDets)

    // Disabled the back button so user can't go back to the dashboard after log out
    const disableBackButton = () => {
        window.history.forward();
    }
    setTimeout( disableBackButton(), 0);
    
    window.addEventListener('load', disableBackButton)
    

    const handleLogout = () => {
        window.location = '/login';
        // sessionStorage.clear();
        setIsLoggedOut(true)
    }

  


    return ( 
      <div className='font-Poppins text-bkwhite flex '>
          <div className='h-screen w-[23%] fixed  bg-bkdeepblue pt-10'>
              <div id='user' className='flex flex-col items-center border-b border-[rgba(255,255,255,0.2)] w-[77%] mx-auto pb-10'>
                  <div className='w-[60px] h-[60px] rounded-full overflow-hidden mb-2'>
                      <img src={Girl1} alt='girl-sticking-out-tongue.jpg'></img>
                  </div>
                    <h3 className='font-semibold text-sm'>{ loggedDets.fullname }</h3>
                    <p className='text-xs'>{ loggedDets.jobTitle }</p>
              </div>
              <div className='py-10 text-xs flex flex-col'>
                  <button className='w-full text-left px-5 bg-bkdeepblue py-4 focus:bg-[rgba(255,255,255,0.3)] border-bkwhite focus:border-l-4 hover:bg-[rgba(255,255,255,0.2)] duration-300 flex gap-6 items-center ' onClick={showDash}><i className='fa fa-home'></i><p>Home</p></button>
                  <button className='w-full text-left px-5 bg-bkdeepblue py-4 focus:bg-[rgba(255,255,255,0.3)] border-bkwhite focus:border-l-4  hover:bg-[rgba(255,255,255,0.2)] duration-300 flex gap-6 items-center' onClick={showTeams} ><i className='fa fa-users'></i><p>Team Members</p></button>
                  <button className='w-full text-left px-5 bg-bkdeepblue py-4 focus:bg-[rgba(255,255,255,0.3)] border-bkwhite focus:border-l-4  hover:bg-[rgba(255,255,255,0.2)] duration-300 flex gap-6 items-center' onClick={showClients} ><i className='fa fa-user-plus'></i><p>Clients</p></button> 
                  <button className='w-full text-left px-5 bg-bkdeepblue py-4 focus:bg-[rgba(255,255,255,0.3)] border-bkwhite focus:border-l-4  hover:bg-[rgba(255,255,255,0.2)] duration-300 flex gap-6 items-center' onClick={showProds} ><i className='fa fa-shopping-bag'></i><p>Products</p></button>
              </div>
              <div className='py-10'>
                  <button onClick={handleLogout} className='w-full text-left text-xs px-5 bg-bkdeepblue py-4 focus:bg-[rgba(255,255,255,0.3)] border-bkwhite focus:border-l-4   hover:bg-[rgba(255,255,255,0.2)] duration-300 flex gap-6 items-center '><i className='fa fa-sign-out'></i> Log Out</button>
              </div>
          </div>
            <div id='dash-content' className='w-[77%] absolute top-0 left-[23%]'>
                {/* ------------------------------------------------------------------------------------------------------------------------------------------Dashboard section done by-[Awogbuyi Timothy] */}
                
                <div id='dashboard' className='w-full px-4'>
                    <DashHome />
                </div>


                {/* ------------------------------------------------------------------------------------------------------------------------------------------Teams Section done by-[Letam Ugwuadu] */}

                <div id='teams' className='w-full hidden px-4'>
                    <Teams />
                </div>
                
                {/* ------------------------------------------------------------------------------------------------------------------------------------------Clients Section Done by-[Please put your name here thank you] */}
                <div id='clients' className='w-full px-4 hidden'>
                    <Clients />
                </div>
                
                {/* ------------------------------------------------------------------------------------------------------------------------------------------Products section done by-[Please put your name here thank you] */}
                <div id='products' className='w-full px-4 hidden'>
                    <Products />
              </div>
          </div>
    </div>
  )
}

export default Dashboard;