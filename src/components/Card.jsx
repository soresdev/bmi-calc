import React from 'react'
import Form from './Form'
import Guide from './Guide'

const Card = () => {
  return (
    <div className='container w-[500] h-[650] flex flex-col justify-center items-center text-center rounded-lg gap-3 bg-white border-solid border-2 border-slate-600 shadow-md p-7'>
        <h1 className='text-4xl text-white bg-slate-600 border-2 border-zinc-700 rounded-lg px-12 py-2 mb-5'>BMI Calculator</h1>
        <Form />
        <Guide />
    </div>
  )
}

export default Card