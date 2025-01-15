import React from 'react'

function DashboardBody({tab}) {

    

  return (
    <section className='h-screen w-full'>

        <section className='px-[20px]'>

          <div className='p-[40px]'>
            <h2 className='urba font-semibold text-[1.5rem]'>Balance</h2>
          </div>

          <div className='flex gap-[20px]'>

            <div className='w-[100%] bg-black h-[300px] rounded-[20px]'>

            </div>

            <div className='w-[100%] bg-[--gray] h-[300px]'>

            </div>

          </div>

        </section>

    </section>
  )
}

export default DashboardBody