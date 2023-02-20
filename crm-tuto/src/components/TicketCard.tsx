import AvatarDisplay from './AvatarDisplay'
import StatusDisplay from './StatusDisplay'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import DeleteBlock from './DeleteBlock'
import { Link } from 'react-router-dom'

import React from 'react'

interface Props  {
  color: any
  ticket: any
  id: any
}

const TicketCard = ({color, ticket, id}: Props) => {
  return (
    <div className=' ticket-card'>
      <div className="ticket-color">
      <Link to={'/'}>
         <h3>Title</h3>
         <AvatarDisplay/>
         <StatusDisplay/>
         <PriorityDisplay/>
         <ProgressDisplay/>
      </Link>
        <DeleteBlock/>
      </div>
    </div>
  )
}

export default TicketCard