/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

const App = () => {
  return (
    <div className='bg-white dark:bg-gray-800 text-black dark:text-white'>
      <div className='h-screen max-w-[1920px] mx-auto bg-white dark:bg-gray-800 text-black dark:text-white shadow-2xl dark:shadow-gray-100 '>
      <div className='flex h-screen justify-between mx-auto'>
        <Sidebar/>
        <MainContent/>
      </div>


      </div>
    </div>
  )
}

export default App