/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const MainContent = () => {
  return (
    <div className=' w-full max-w-[1920px] bg-[url("https://images.unsplash.com/photo-1491466424936-e304919aada7?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center h-96 '>
        
        <div className='dark:bg-slate-900 bg-slate-100 rounded-lg relative h-[900px]  top-[200px] z-20  md:grid grid-cols-12 gap-3 flex flex-col px-12'>
            <div className='dark:bg-slate-600 bg-slate-300 shadow-lg  h-fit min-w-[150px]  col-span-3 rounded-xl max-w-[250px] lg:ml-16 md:-ml-6  -translate-y-16'>
                <div className='flex flex-col  justify-around items-center p-4'>
                    <img className='w-28 mt-8 rounded-2xl my-2 font-bold text-4xl' src="https://images.pexels.com/photos/18932250/pexels-photo-18932250.jpeg" alt="profile image" />
                    <p>Prabhsimran Kaur</p>
                    <p className='dark:text-gray-100 my-1'>emaiId@here</p>
                    <p className='dark:text-gray-100 my-1'>9999999999</p>
                    <p className='dark:text-gray-100 my-4'>location here</p>

                </div>
                <div>

                </div>
            </div>
            <div className='col-span-9 mt-14'>

                <div className='pb-8'>
                    <p className='text-2xl'>Date and time </p>
                    <p className='text-4xl font-semibold'>Good morning, UserName</p>
                </div>

                <div className=' md:grid grid-cols-12  gap-6 flex flex-col w-full'>
                    <div className='dark:bg-slate-600 bg-slate-300 max-h-[500px] h-fit shadow-lg col-span-9 p-4 overflow-y-scroll rounded-xl'>
                        <DateBar Date="Day Date Year"/>
                        <WorkComp time="11:30 AM" task="UX Webinar" status="Upcoming"/>
                        <WorkComp time="11:30 AM" task="Messaging" status="Upcoming"/>
                        <WorkComp time="11:30 AM" task="UX Webinar" status="texting"/>
                        <WorkComp time="11:30 AM" task="Video Call" status="Upcoming"/>
                        <WorkComp time="11:30 AM" task="UX Webinar" status="Upcoming"/>
                        <WorkComp time="11:30 AM" task="UX Webinar" status="Upcoming"/>
                        <WorkComp time="11:30 AM" task="UX Webinar" status="Upcoming"/>
                        <WorkComp time="11:30 AM" task="UX Webinar" status="Upcoming"/>
                        <WorkComp time="11:30 AM" task="UX Webinar" status="Upcoming"/>
                        <WorkComp time="11:30 AM" task="UX Webinar" status="Upcoming"/>
                    </div>
                    <div className='dark:bg-slate-600 bg-slate-300 h-80 shadow-lg col-span-3 p-4 grid grid-cols-2 gap-4 rounded-xl'>
                        <div  className=' flex flex-col  mx-4'>
                            <div className='dark:bg-green-300/70 bg-green-200/80 my-10 h-20 w-20 rounded-lg items-center flex justify-center col-span-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-12' viewBox="0 0 24 24" fill="none" stroke="currentColor" ><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h5"/><path d="M17.5 17.5 16 16.3V14"/><circle cx="16" cy="16" r="6"/></svg>
                            </div>

                            <div className='dark:bg-green-300/70 bg-green-200/80 my-4 h-20 w-20 rounded-lg items-center flex justify-center col-span-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-12' viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M2 8h20"/><circle cx="8" cy="14" r="2"/><path d="M8 12h8"/><circle cx="16" cy="14" r="2"/></svg>
                            </div>

                        </div>
                        <div>
                            
                        <div  className=' flex flex-col  mx-2'>
                            <div className='dark:bg-green-300/70 bg-green-200/80 my-10 h-20 w-20 rounded-lg items-center flex justify-center col-span-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-12' viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                            </div>

                            

                        </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
        {/* <div className='  absolute  -top-[200px] max-w-[1920px]  bg-black z-0'>
            <img className='max-w-[1920px] w-full' src="https://images.unsplash.com/photo-1491466424936-e304919aada7?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="background image" />
        </div> */}
    </div>
  )
}


const WorkComp = ({time,task, status})=>{
    return(
        <div className='flex border-b-2 p-2  '>
            <div className='flex flex-col px-2 items-start w-fit border-r-2 min-w-[100px] text-xs  dark:border-zinc-300 border-zinc-800'>
                <div className='text-base  font-semibold'>
                    {time}
                </div>
                <p>
                    {time}
                </p>
            </div>
            <div className='w-full mx-2'>
                <div className='text-xs'>
                    {status}
                </div>
                <div className='text-lg font-bold'>
                    {task}
                </div>
            </div>
        </div>
    )
}


const DateBar=({Date})=>{
    return(
        <div className='flex justify-between px-6 dark:bg-slate-500 bg-slate-400/70 rounded-lg py-2'>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
            </svg>

            </div>
            <div className='w-full px-6'>
                {Date}
            </div>
            <div className='flex justify-between'>
                <div className='mx-6'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>

                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>


                </div>

            </div>
        </div>
    )
}



export default MainContent