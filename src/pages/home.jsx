import React, { useState } from 'react'
import SideBar from '../components/sidebar'
import DashboardBody from '../components/dashboardBody'

function Home() {

  const [tab, setTab] = useState("fund")


  return (
    <div className='flex'>
        <SideBar tab={tab} onTab={setTab}/>
        <DashboardBody tab={tab}/>
    </div>
  )


}

export default Home