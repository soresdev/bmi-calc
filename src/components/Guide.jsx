import React from 'react'

const Guide = () => {
  return (
    <div className='flex flex-col text-center items-center justify-center gap-2'>
        <h3 className='text-lg text-white bg-slate-600 underline border-2 border-zinc-700 rounded-lg px-12 py-2 mb-2'>BMI Weight Guide</h3>
        <div className='mt-3'>
          <p>Less than 18.6% BMI = Under Weight</p>
          <p>18.6% - 24.9% BMI = Normal Range</p>
          <p>24.9% or Greater = Over Weight</p>
        </div>
    </div>
  )
}

export default Guide