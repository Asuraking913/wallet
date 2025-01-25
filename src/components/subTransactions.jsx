import React from 'react'
import { TbCurrencyNaira } from "react-icons/tb";



function SubTransactions(items) {
  return (
   <ul className='flex justify-between pop capitalize p-[10px] text-[0.9rem]'>
        <li className='w-[150px]'>
          {items.reference}
        </li>
        <li className='w-[150px] flex items-center gap-[2px]'>
            <span className='text-[1.1rem]'>
                <TbCurrencyNaira />
            </span>

            <span>
                {items.amount}
            </span>
        </li>
        <li className='w-[150px] flex items-center gap-[2px]'>
            <span className='text-[1.1rem]'>
                <TbCurrencyNaira />
            </span>

            <span>
                {items.prevBalance}
            </span>
        </li>
        <li className='w-[150px] flex items-center gap-[2px]'>
            <span className='text-[1.1rem]'>
                <TbCurrencyNaira />
            </span>

            <span>
                {items.newBalance}
            </span>
        </li>
        <li className='w-[150px]'>
          {items.date}
        </li>
    </ul>
  )
}

export default SubTransactions