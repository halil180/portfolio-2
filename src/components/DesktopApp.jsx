import React from 'react'
import bfh from "../assets/bfh.png"

function DesktopApp() {
  return (
    <div className="container mx-auto  bg-gray-700 mt-5 mb-5 ">
    <div className="mockup-window border bg-base-300">
    <div className="flex justify-center  bg-base-200">
      <a href="https://halil180.github.io/PaserelleProjectWebsite/" target="_blank" className='transition duration-300 ease-in-out hover:opacity-70 skew-hover'>
        <img className='rounded w-full'  src={bfh} alt="my desktop app" />
        </a>
    </div>
  </div>
  </div>
  )
}

export default DesktopApp