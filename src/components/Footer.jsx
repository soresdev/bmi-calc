import React from 'react'

const Footer = () => {
  return (
    <footer className=' mt-5 flex items-center text-center justify-center'>
        <div>
            <a href="https://github.com/soresdev" target="_blank"><i className='bx bxl-github text-4xl mx-2 bg-slate-700 text-white rounded-[50px] h-[60px] w-[60px] leading-[60px] ease-in-out duration-300 hover:scale-100 hover:translate-y-[-15px] hover:bg-slate-300 hover:text-slate-700'></i></a>
            <a href="https://twitter.com/soresMC" target="_blank"><i className='bx bxl-twitter text-4xl mx-2 bg-slate-700 text-white rounded-[50px] h-[60px] w-[60px] leading-[60px] ease-in-out duration-300 hover:scale-100 hover:translate-y-[-15px] hover:bg-slate-300 hover:text-slate-700'></i></a>
            <p className='mt-3 font-bold text-sm'>&copy; Drew Sanders 2024</p>
        </div>
    </footer>
  )
}

export default Footer