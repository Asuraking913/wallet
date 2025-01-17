import React, { useState } from 'react'
import SubTransactions from './subTransactions'

function Transactions() {

  const [transList, setTransList] = useState([
    {
      reference: "2424234234", 
      amount: "10000", 
      prevBalance: "20000",
      newBalance: "100000", 
      date: "qwrqwrqwe"
    }, 
    {
      reference: "2424234234", 
      amount: "10000", 
      prevBalance: "20000",
      newBalance: "100000", 
      date: "qwrqwrqwe"
    }, 
    {
      reference: "2424234234", 
      amount: "10000", 
      prevBalance: "20000",
      newBalance: "100000", 
      date: "qwrqwrqwe"
    }, 
    {
      reference: "2424234234", 
      amount: "10000", 
      prevBalance: "20000",
      newBalance: "100000", 
      date: "qwrqwrqwe"
    }, 

  ])

  const transactions = transList.map((items, i) => <SubTransactions {...items} key={i}/>)

  return (
    <section className='flex flex-col gap-[10px] px-[20px]'>

      <div className=' py-[25px]'>
        <h2 className='urba text-2xl font-semibold'>Wallet Transactions</h2>
      </div>

      <div className='border-[1px] border-[--gray]'></div>

      <section className=' bg-[--gray] p-[10px] flex flex-col gap-[10px] rounded-[5px]'>

        <h2 className='urba text-[1.2rem] font-semibold'>Transactions</h2>

        <div className='border-[1px] border-[--white]'></div>

        <article>

          <ul className='flex justify-between pop capitalize p-[10px]'>
            <li className='w-[150px]'>
              Reference
            </li>
            <li className='w-[150px]'>
              Amount
            </li>
            <li className='w-[150px] '>
              Previous Balance
            </li>
            <li className='w-[150px] '>
              New Balance
            </li>
            <li className='w-[150px] '>
              Date
            </li>
          </ul>

          <div className='flex flex-col gap-[30px] mt-[20px]'>
            {transactions}
          </div>

        </article>


      </section>

    </section>
  )
}

export default Transactions