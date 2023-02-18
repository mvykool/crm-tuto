import React from 'react'
import TicketCard from '../components/TicketCard'

const Dashboard = () => {


  const tickets = [
    {
     category: "q1, 2022",
     color: "red",
     title: "NFT safety 101",
     owner: "ania kubow",
     avatar: "https://www.freecodecamp.org/news/content/images/size/w150/2021/05/ania-kubow-gravatar.jpeg",
     status: "done",
     priority: "5",
     progress: "40",
     description: "write about it",
     timestamp: "2022-02-11T07"
  },
  {
    category: "q1, 2022",
    color: "red",
    title: "build and sell API",
    owner: "ania kubow",
    avatar: "https://www.freecodecamp.org/news/content/images/size/w150/2021/05/ania-kubow-gravatar.jpeg",
    status: "working on it",
    priority: "3",
    progress: "70",
    description: "make a blog about that",
    timestamp: "2022-06-11T07"
 },
 {
  category: "q2, 2022",
  color: "blue",
  title: "build and bot",
  owner: "john doe",
  avatar: "https://www.freecodecamp.org/news/content/images/size/w150/2021/05/ania-kubow-gravatar.jpeg",
  status: "working on it",
  priority: "4",
  progress: "10",
  description: "make a video about that",
  timestamp: "2022-06-11T07"
}
]

const uniqueCategories = [
  ...new Set (tickets?.map(({category}) => category))
]

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