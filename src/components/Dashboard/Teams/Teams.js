import React, { useEffect, useState } from 'react'

const Teams = () => {

  const [teamData, setTeamData] = useState([]);
    useEffect(() => {
      fetch("https://fakerapi.it/api/v1/persons?_quantity=30")
      .then(res => res.json())
      .then(data => setTeamData(data.data))
    }, [])
    console.log(teamData)

    return (
      <div>
          <div className='mt-6'>
            <h3 className='text-bkdeepblue font-semibold text-xl  '>Team Members</h3>
          </div>
        <div className='bg-white rounded-md mt-10 shadow-md px-4 py-2'>
          <div className='text-bkdeepblue border-b flex items-center py-2 gap-4'>
                <div className='w-5'>
                  <h3 className='text-xs font-semibold'>id</h3>
                </div>
                <div className='w-[30px] h-[30px] rounded-full overflow-hidden'>
              {/* <img src={ } alt='member image' className='h-full  transform rotate-90' /> */}
                </div>
                <div className='flex flex-1 w-[30%]'>
                  <h3 className='font-semibold text-sm ml-2'>Full Name</h3>
                </div>
                <div className='w-[20%] flex justify-start flex-1'>
                  <p className='font-semibold text-sm '>email</p>
                </div>
                <div className='w-[20%] flex flex-1 justify-start'>
                  <h3 className=' font-semibold text-sm '>Phone Number</h3>
                </div>
                <div className='w-[10%]'>
                  <h3 className='font-semibold text-sm '>Gender </h3>
                </div>
              </div>
          {
            teamData ? teamData.map((member, idx) =>
              <div key={idx} className='text-bkdeepblue border-b flex items-center py-2 gap-4'>
                <div className='w-5'>
                  <h3 className='text-xs font-semibold'>{member.id}</h3>
                </div>
                <div className='w-[30px] h-[30px] rounded-full overflow-hidden'>
                  <img src={member.image} alt='member image' className='h-full  transform rotate-90' />
                </div>
                <div className='flex flex-1 border-x w-[30%]'>
                  <h3 className='font-semibold text-sm ml-2'>{member.firstname} {member.lastname}</h3>
                </div>
                <div className='w-[20%] flex justify-start border-r flex-1'>
                  <p> {member.email}</p>
                </div>
                <div className='w-[20%] flex flex-1 border-r justify-start'>
                  <h3 className=' text-xs'>{member.phone}</h3>
                </div>
                <div className='w-[10%]'>
                  <h3 className='text-xs'>{member.gender}</h3>
                </div>
              </div>
            ) : null
          }
          </div>
      </div>
    )
}

export default Teams