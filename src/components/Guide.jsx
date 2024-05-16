import React from 'react'

const Guide = () => {
  return (
    <div className='flex flex-col text-center items-center justify-center gap-2'>
        <h3 className='text-xl text-white bg-slate-600 border-2 border-zinc-700 rounded-lg px-20 py-2 mb-2'>BMI Weight Guide</h3>
        <div className='mt-1'>
          <p>Less than 18.6% BMI = <span className='text-orange-400 font-semibold'>Under Weight</span></p>
          <p>18.6% - 24.9% BMI = <span className='text-green-700 font-semibold'>Normal Range</span></p>
          <p>24.9% or Greater = <span className='text-red-600 font-semibold'>Over Weight</span></p>
        </div>
    </div>
  )
}

export default Guide