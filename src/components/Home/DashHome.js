import React from 'react'
import Graph1 from '../../assets/graph1.jpg'
import Cap from '../../assets/nike-cap.jpg'
import Nike from '../../assets/nike1.webp'
import Fila from '../../assets/fila.jpg'
import RoundChart from '../../assets/roundchart.jpg'
import barChart from '../../assets/bar-chart.jpg'
import adBanner from '../../assets/adbanner.jpg'
import SalesChart from './SalesChart'
import BarGraph from './BarGraph'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"


const DashHome = () => {

  // This page was worked on by Awogbuyi Timothy

  const topProds = [
    {id:'1', image:Fila, title:'Fila disruptor sneakers', price: 2500},
    {id:'2', image:Nike, title:'Nike Air sneakers', price: 3000},
    {id:'3', image:Cap, title:'Nike baseball cap', price: 500},
    {id:'4', image:Fila, title:'Fila disruptor sneakers', price: 2500},
    {id:'5', image:Nike, title:'Nike Air sneakers', price: 3000},
    {id:'6', image:Cap, title:'Nike baseball cap', price: 500},
    {id:'7', image:Fila, title:'Fila disruptor sneakers', price: 2500},
    {id:'8', image:Nike, title:'Nike Air sneakers', price: 3000},
  ];

  

  return (
    <div className='font-Poppins'>
      {/* -----------------------------------------------------------------------------------------------------------Overview Div*/}
      <div className='flex justify-between pt-6 items-end'>
        <h2 className='text-xl font-semibold w-[65%] text-bkdeepblue'>Overview</h2>
        <div className='flex w-[33%] items-center gap-2 justify-end'>
          <div className='text-[9px] text-bkdeepblue font-semibold bg-white border shadow-sm border-bkgrey py-2 px-4 rounded flex items-center gap-4'>22 July 2022<i className='fa fa-calendar'></i></div>
          <p className='text-bkdeepblue font-semibold'> - </p>
          <div className='text-[9px] text-bkdeepblue font-semibold bg-white border shadow-sm border-bkgrey py-2 px-4 rounded flex items-center gap-4'>22-july-2022<i className='fa fa-calendar'></i></div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------Second section begins here */}
      <div className='flex justify-between mt-6'>
        <div className='w-[65%] max-h-[80vh] min-h-[80vh] mb-2 flex flex-col gap-5'>
          <div className='flex justify-between'> 
            <div className='w-[31%] bg-white rounded shadow-sm p-4 flex flex-col gap-1'>
              <p className='text-bkgrey font-medium'>Total Profit</p>
              <div className='flex items-center gap-1'>
                <p className='text-lg text-bkdeepblue font-semibold '>$95,250</p>
                <span className='text-xs text-green-400'>+3.55%</span>
              </div>
            </div>
            <div className='w-[31%] bg-white rounded shadow-sm p-4 flex flex-col gap-1'>
              <p className='text-bkgrey font-medium'>Total Expenses</p>
              <div className='flex items-center gap-1'>
                <p className='text-lg text-bkdeepblue font-semibold '>$20,000</p>
                <span className='text-xs text-green-400'>+2.67%</span>
              </div>
            </div>
            <div className='w-[31%] bg-white rounded shadow-sm p-4 flex flex-col gap-1'>
              <p className='text-bkgrey font-medium'>New Users</p>
              <div className='flex items-center gap-1'>
                <p className='text-lg text-bkdeepblue font-semibold '>$1,951</p>
                <span className='text-xs text-red-400'>-9.89%</span>
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------------------------------------------------------------Sales report */}

          <div className='w-full h-[80vh] p-4 shadow-sm bg-white flex flex-col flex-1 rounded'>
            <div className='flex  justify-between text-bkdeepblue'>
              <h2 className='font-bold '>Sales Report</h2>
              <div className='flex gap-4'>
                <div className='flex gap-2 items-center'>
                  <div className='w-[15px] h-[15px] bg-bkdeepblue'></div>
                  <p className='text-xs font-semibold'>Incomes</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <div className='w-[15px] h-[15px] bg-bkpurple'></div>
                  <p className='text-xs font-semibold'>Expenses</p>
                </div>
              </div>
            </div>
            {/* <img className='w-full pb-3' src={Graph1} alt='graph-analytics.jpg'></img> */}
            <SalesChart style={{fontSize:"15px"}} />
          </div>
        </div>

        {/* -------------------------------------------------------------------------------------------------Top Products */}
        <div className='w-[33%] h-[80vh] overflow-hidden bg-white shadow-sm rounded '>
          <div className=' py-5 px-4 w-full border-b'>
            <h2 className='font-semibold text-bkdeepblue '>Top Selling Products</h2>
          </div>
          {/* ----------------------------------------------------------------------------------------mapped products here */}
          <div>
            {
              topProds && topProds.map((topProd) => 
                <div className=' px-4 py-2 flex border-b items-center text-bkdeepblue justify-between'>
                  <div className='w-[40px] h-[40px] rounded overflow-hidden '>
                    <img src={topProd.image}></img>
                  </div>
                  <h3 className='flex-1 font-semibold text-sm ml-2'>{ topProd.title }</h3>
                  <p className='text-xs font-bold '> ${ topProd.price }</p>
                </div>
              )
            }
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------------------third section begins here*/}
      <div className='w-full mt-3 h-[53vh] flex justify-between'>
        <div className='w-[65%] rounded flex justify-between'>
          <div className='w-[44%] flex flex-col justify-between'>
            <div className='rounded shadow-sm p-4 h-[60%] bg-white overflow-hidden'>
              <div className='w-full h-full overflow-hidden rounded'>
                <img className='w-full' src={adBanner} alt='place ads here'></img>
              </div>
            </div>
            <div className='rounded shadow-sm p-4 h-[35%] bg-bkdeepblue'>
              <div className='flex items-center mt-2 gap-4'>
                <i className='fa fa-pie-chart text-7xl text-bkwhite'></i>
                <div className='flex flex-col gap-2'>
                  <p className='text-[11px]'>Weekly Sales (%) : <span className='font-semibold underline'>70%</span></p>
                  <p className='text-[11px]'>Weekly Expenditure (%) : <span className='font-semibold underline'>20%</span></p>
                </div>
            </div>
             </div>
          </div>
          <div className='max-w-[53%] min-w-[53%] h-[100%]  shadow-sm rounded bg-white p-4 '>
            <div className='flex items-center justify-between'>
              <h3 className='text-bkdeepblue font-medium'>Weekly Line Stats</h3>
              <a className='text-bkpurple text-xs  hover:text-bkdeepblue hover:underline cursor-pointer'>View More</a>
            </div>
            {/* <img className='w-full mt-24' src={barChart} alt='chart.jpg'></img> */}
            <div className='w-[100%] h-[80%] m-auto mt-8'>
              <BarGraph/>
            </div>
          </div>
        </div>
        <div className='w-[33%] bg-white p-4 rounded shadow-sm relative'>
          {/* <img className='w-full' src={RoundChart} alt='chart.jpg'></img> */}
          <CircularProgressbar 
            value={60}
            
            styles={buildStyles({
              backgroundColor: "#fafafa",
              trailColor: "#f1f2",
              pathColor: "#ff7200",
            })}
          />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
            <p className='text-slate-800 font-bold text-3xl'>129,345</p>
            <p className='text-[#ccc] font-semibold text-base'>Products Sold</p>
          </div>
        </div>
      </div>
      <div className='h-[3rem]'></div>
    </div>
  )
}

export default DashHome;