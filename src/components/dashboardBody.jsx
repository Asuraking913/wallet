import React from 'react'
import FundWallet from './fundWallet'
import Transactions from './Transactions'






function DashboardBody({tab}) {

    

  return (
    <section className='h-screen w-full overflow-scroll hide-scrollbar'>

      {

        tab === "fund" &&

        <FundWallet />

      }

      {

        tab === 'trans' &&

        <Transactions />

      }
          

    </section>
  )
}

export default DashboardBody