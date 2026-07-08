import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black px-5 lg:px-28 py-3 lg:py-6 flex items-center justify-between mt-16'>
      <div className="flex items-center gap-x-2 select-none">
        <span className="bg-white text-black px-2 py-0.5 text-xs lg:text-sm font-black rounded tracking-tighter">RR</span>
        <span className="font-extrabold text-white text-base lg:text-lg tracking-tight">Rahul</span>
      </div>

      <div className='text-white lg:font-semibold lg:text-sm font-normal text-[10px] text-right lg:space-y-3'>
        <p>@ 2026 Personal Portfolio</p>
        <p>Made by Rahul R</p>
      </div>
    </div>
  )
}
