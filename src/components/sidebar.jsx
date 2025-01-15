import React from 'react'
import { FaWallet } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";






function SideBar({tab}) {



  return (
   <section className='h-screen w-[25%] bg-[--bg] flex  flex-col justify-between '>
    <div className='flex items-center p-[20px]'>
        <h1 className='urba font-semibold text-[2rem]'>Scourge</h1>
    </div>

    <ul className='flex flex-col gap-[10px] pop text-[1.2rem] px-[10px] h-[70vh]'>
        <li className='px-[20px] hover:bg-[--white] py-[10px] rounded-[30px] cursor-pointer'>
            <button className='outline-none flex items-center gap-[10px]'>
                <i className='text-[1.5rem]'>
                    <FaWallet />
                </i>
                <p>Balance</p>
            </button>
        </li>
        <li className='px-[20px] hover:bg-[--white] py-[10px] rounded-[30px] cursor-pointer'>
            <button className='outline-none flex items-center gap-[10px]'>
                <i className='text-[1.5rem]'>
                    <GrTransaction />
                </i>
                <p>Transactions</p>
            </button>
        </li>
        <li className='px-[20px] hover:bg-[--white] py-[10px] rounded-[30px] cursor-pointer'>
            <button className='outline-none flex items-center gap-[10px]'>
                <i className='text-[1.5rem] '>
                    <TbReportSearch />
                </i>
                <p>Reports</p>
            </button>
        </li>
    </ul>

    <figure className=''>
        <img src="" className='w-[50px] h-[50px] p-[10px] bg-white rounded-full' alt="" />
    </figure>

   </section>
  )
}

export default SideBar