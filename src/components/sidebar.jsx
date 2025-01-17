import React from 'react'
import { useState } from 'react';
import { GrTransaction } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";
import { RiFundsLine } from "react-icons/ri";
import account from "../assets/account.png"








function SideBar({tab, onTab}) {

    const [balance, setBalance] = useState("2000")

  return (
   <section className='h-screen w-[25%] bg-[--bg] flex  flex-col justify-between '>
    <div className='flex justify-center p-[20px] flex-col gap-[5px]'>
        <h1 className='urba font-semibold text-[2rem]'>Scourge</h1>

        <div className='flex items-center'>

            <img src={account}  className='w-[40px] p-[4px] bg-white rounded-full' alt="" />
            
            <h2 className='urba px-[10px]'>
                <span>Balance:</span>
                <span className='ml-[5px]'>
                    {balance}
                </span>
            </h2>
        </div>
    </div>

    <ul className='flex flex-col gap-[10px] pop text-[1.1rem] px-[10px] h-[74vh]'>
        <li onClick={() => onTab("fund")} className='px-[20px] hover:bg-[--white] py-[10px] rounded-[30px] cursor-pointer'>
            <button  className='outline-none flex items-center gap-[10px]'>
                <i className='text-[1.5rem]'>
                    <RiFundsLine />
                </i>
                <p>Fund Wallet</p>
            </button>
        </li>
        <li onClick={() => onTab("trans")} className='px-[20px] hover:bg-[--white] py-[10px] rounded-[30px] cursor-pointer'>
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

   </section>
  )
}

export default SideBar