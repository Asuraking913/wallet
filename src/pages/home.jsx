import React, { useState } from 'react'
import SideBar from '../components/sidebar'
import DashboardBody from '../components/dashboardBody'

function Home() {

  const [tab, setTab] = useState("balance")


  return (
    <div className='flex'>
        <SideBar />
        <DashboardBody tab={tab}/>
    </div>
  )


}

export default Home