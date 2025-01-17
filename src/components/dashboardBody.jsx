import React from 'react'
import FundWallet from './fundWallet'






function DashboardBody({tab}) {

    

  return (
    <section className='h-screen w-full overflow-scroll hide-scrollbar'>
{/* 
      {
        tab === "balance" &&

        <Balance />

      } */}

      {
        tab === "fund" &&

        <FundWallet />

      }
          

    </section>
  )
}

export default DashboardBody