import React from 'react'
import Girl1 from '../../assets/girl1.jpg'
import DashHome from '../Home/DashHome'
import Clients from './Clients/Clients'
import Products from './Products/Products'
import Teams from './Teams/Teams'

const Dashboard = () => {

    const dashRouteHandler = (e) => {
    }


    return ( 
      <div className='font-Poppins text-bkwhite flex '>
          <div className='h-screen w-[23%] fixed  bg-bkdeepblue pt-10'>
              <div id='user' className='flex flex-col items-center border-b border-[rgba(255,255,255,0.2)] w-[77%] mx-auto pb-10'>
                  <div className='w-[60px] h-[60px] rounded-full overflow-hidden mb-2'>
                      <img src={Girl1} alt='girl-sticking-out-tongue.jpg'></img>
                  </div>
                  <h3 className='font-semibold text-sm'>Alissa Moore</h3>
                  <p className='text-xs'>Chief CO</p>
              </div>
              <div className='py-10 text-xs flex flex-col'>
                  <button className='w-full text-left px-5 bg-bkdeepblue py-4 focus:bg-[rgba(255,255,255,0.3)] border-bkwhite focus:border-l-4  hover:bg-[rgba(255,255,255,0.2)] duration-300 flex gap-6 items-center ' onClick={dashRouteHandler}><i className='fa fa-home'></i><p>Home</p></button>
                  <button className='w-full text-left px-5 bg-bkdeepblue py-4 focus:bg-[rgba(255,255,255,0.3)] border-bkwhite focus:border-l-4  hover:bg-[rgba(255,255,255,0.2)] duration-300 flex gap-6 items-center '><i className='fa fa-users'></i><p>Team Members</p></button>
                  <button className='w-full text-left px-5 bg-bkdeepblue py-4 focus:bg-[rgba(255,255,255,0.3)] border-bkwhite focus:border-l-4  hover:bg-[rgba(255,255,255,0.2)] duration-300 flex gap-6 items-center '><i className='fa fa-user-plus'></i><p>Clients</p></button> 
                  <button className='w-full text-left px-5 bg-bkdeepblue py-4 focus:bg-[rgba(255,255,255,0.3)] border-bkwhite focus:border-l-4  hover:bg-[rgba(255,255,255,0.2)] duration-300 flex gap-6 items-center '><i className='fa fa-shopping-bag'></i><p>Products</p></button>
              </div>
              <div className='py-10'>
                  <button className='w-full text-left text-xs px-5 bg-bkdeepblue py-4 focus:bg-[rgba(255,255,255,0.3)] border-bkwhite focus:border-l-4   hover:bg-[rgba(255,255,255,0.2)] duration-300 flex gap-6 items-center '><i className='fa fa-sign-out'></i> Log Out</button>
              </div>
          </div>
            <div id='dash-content' className='w-[77%] absolute top-0 left-[23%]'>
                {/* ------------------------------------------------------------------------------------------------------------------------------------------Dashboard section done by-[Awogbuyi Timothy] */}
                
                <div id='dashboard' className='w-full px-4'>
                    <DashHome />
                </div>

                {/* ------------------------------------------------------------------------------------------------------------------------------------------Teams Section done by-[Please put your name here thank you] */}
                <div id='teams' className='w-full px-4 hidden'>

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