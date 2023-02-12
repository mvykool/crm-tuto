import React from 'react'
import TicketCard from '../components/TicketCard'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h1>crm project</h1>
      <div className='ticket-container'>
        <TicketCard/>
                
      </div>
    </div>
  )
}

export default Dashboard