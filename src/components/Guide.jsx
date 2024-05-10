import React from 'react'

const Guide = () => {
  return (
    <div className='flex flex-col text-center items-center justify-center gap-2'>
        <h3 className='text-lg text-white bg-slate-600 underline border-2 border-zinc-700 rounded-lg px-12 py-2 mb-2'>BMI Weight Guide</h3>
        <div className='mt-3'>
          <p id='guide-p1'>Less than 18.6% BMI = <span>Under Weight</span></p>
          <p id='guide-p2'>18.6% - 24.9% BMI = <span>Normal Range</span></p>
          <p id='guide-p3'>24.9% or Greater = <span>Over Weight</span></p>
        </div>
    </div>
  )
}

export default Guide