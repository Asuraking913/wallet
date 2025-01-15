import React from 'react'
import { AiOutlineSend } from "react-icons/ai";
import { FaNairaSign } from "react-icons/fa6";
import { MdCallReceived } from "react-icons/md";




function DashboardBody({tab}) {

    

  return (
    <section className='h-screen w-full'>

        <section className='px-[20px]'>

          <div className='p-[40px]'>
            <h2 className='urba font-semibold text-[1.5rem]'>Balance:  
             
                
              <span className='text-[0.9rem] ml-[10px] '>
                {"200000".toLocaleString()} 
              </span>
            </h2>
          </div>

          <div className='flex gap-[20px]'>

            <div className='w-[100%] bg-black h-[250px] rounded-[20px] p-[20px] text-[--white] flex flex-col justify-between'>

              <div className='flex justify-between items-center text-[1.5rem]'>
                <h3 className=' pop font-semibold'>Send</h3>

                <i className=''>
                  <AiOutlineSend />
                </i>
              </div>

              <p className='text-[0.8rem] pop'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta necessitatibus totam id aliquam magnam quasi corporis ea quod maiores laborum facilis
              </p>

            </div>

            <div className='w-[100%] bg-[--gray] h-[250px] rounded-[20px] p-[20px] text-[--black] flex flex-col justify-between'>

              <div className='flex justify-between items-center text-[1.5rem]'>
                <h3 className=' pop font-semibold'>Receive</h3>

                <i className=''>
                  <MdCallReceived />
                </i>
              </div>

              <p className='text-[0.8rem] pop'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta necessitatibus totam id aliquam magnam quasi corporis ea quod maiores laborum facilis
              </p>

            </div>

          </div>

        </section>

    </section>
  )
}

export default DashboardBody