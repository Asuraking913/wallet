import React from 'react'
import { AiOutlineSend } from "react-icons/ai";
import { MdCallReceived } from "react-icons/md";

function FundWallet() {
  return (
    <section className='flex gap-[20px] p-[20px]'>

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

          </section>
  )
}

export default FundWallet