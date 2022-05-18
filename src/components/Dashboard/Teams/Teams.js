import React, { useEffect, useState } from 'react'

const Teams = () => {

  const [teamData, setTeamData] = useState([]);
    useEffect(() => {
      fetch("https://fakerapi.it/api/v1/persons?_quantity=10")
      .then(res => res.json())
      .then(data => setTeamData(data.data))
    }, [])
    console.log(teamData)

    const teamCard = teamData.map(member => {
      return (
        <div className='text-bkdeepblue grid grid-rows-1 grid-flow-col gap-4 pb-8 '>
          <h3>{member.id}</h3>
          <img src={member.image} className='w-20 h-20 rounded-full ' />
          <h3 className='flex-1 font-semibold text-sm ml-2'>{ member.firstname } {member.lastname}</h3>
          <p> { member.email}</p>
          <h3>{member.phone}</h3>
          <h3>{member.gender}</h3>
        </div>
      );
    });



  return (
      <div className="">
          <h1 className='font-extrabold font-sans ... text-black text-3xl text-center pb-8 text-bkdeepblue'>Meet the team!</h1>
          <div className=''>
            {teamCard}
          </div>
    </div>
  )
}

export default Teams