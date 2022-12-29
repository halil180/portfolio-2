import React from 'react'
import { Fade } from "react-awesome-reveal";
import { Link, } from "react-router-dom";

function Hero() {
  return (
    
<div className="hero min-h-screen bg-base-200">
<Fade>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img alt='me' src="https://media.licdn.com/dms/image/C4E03AQEaXzW5hou1tQ/profile-displayphoto-shrink_800_800/0/1638012386609?e=1677715200&v=beta&t=YITv4aLdaZfkvbXNd0oOmmu3V24rc3Bf2lpBysIcTlE" className="max-w-sm rounded-lg shadow-2xl w-full  mask mask-circle object-contain" />
    <div>
      <h1 className="text-5xl font-bold">Hi there</h1>
  
      <p className="py-6 text-3xl">I'm Halil Kömürcü, I'm a full-stack web developer</p>
      <Link to="about" className="btn btn-secondary">About me</Link>

    </div>
  </div>
  </Fade>
</div>  )
}

export default Hero