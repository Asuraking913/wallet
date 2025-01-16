import React from 'react'
import FundWallet from './fundWallet'






function DashboardBody({tab}) {

    

  return (
    <section className='h-screen w-full'>
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