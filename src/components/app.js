import React from 'react'
import UploadForm from './UploadForm'
import UnlockForm from './UnlockForm'


const App = () => {
  return (
    <div className=' min-w-full min-h-fit  mt-32' >
      <div>
        <p className='text-blue-500 text-4xl text-center pb-12 font-bold'>Your Files, Your Control</p>
      </div>
       <div className='main flex justify-around h-auto w-auto items-center py-6'>
          <div className="1 bg-gray-200 box-border shadow-xl drop-shadow-lg h-[30rem] w-[30rem] rounded-lg">
                <div className='flex justify-center  p-5'><span className='text-blue-600 text-center text-2xl font-semibold tracking-wide'>Locker</span></div>
                    <div>
                        <UploadForm/>
                    </div>
          </div>
          <div className='border-r-2 h-72 border-gray-400'></div>
          <div className="2 bg-gray-200 box-border shadow-xl drop-shadow-lg h-[30rem] w-[30rem] rounded-lg">
            <div className='flex justify-center p-5'><span className='text-blue-600 text-center text-2xl font-semibold tracking-wide'>Unlocker</span></div>
                <UnlockForm/>
          </div>
       </div>
    </div>
  )
}

export default App
