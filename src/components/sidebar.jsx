import React from 'react'
import { FaChalkboardUser } from "react-icons/fa6";


function SideBar({tab}) {



  return (
   <section className='h-screen w-[25%] bg-[--bg]'>
    <div className='flex items-center p-[20px]'>
        <h1 className='urba font-semibold text-[2rem]'>Scourge</h1>
    </div>

    <ul className='flex flex-col gap-[10px] pop text-[1.2rem]'>
        <li className='px-[20px] hover:bg-[--white] py-[10px] rounded-[30px] cursor-pointer'>
            <button className='sm:hover:bg-[--white] '>
                <i></i>
                <p>Balance</p>
            </button>
        </li>
        <li className='px-[20px] hover:bg-[--white] py-[10px] rounded-[30px] cursor-pointer'>
            <button>
                <i></i>
                <p>Transactions</p>
            </button>
        </li>
        <li className='px-[20px] hover:bg-[--white] py-[10px] rounded-[30px] cursor-pointer'>
            <button>
                <i></i>
                <p>Reports</p>
            </button>
        </li>
    </ul>

   </section>
  )
}

export default SideBar