import React from 'react'
import { Fade } from "react-awesome-reveal";
import { Link, } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import halil from "../assets/Halil_K.jpeg"
function Hero() {
  const { t, i18n } = useTranslation();
  return (
    
<div className="hero min-h-screen bg-base-200">
<Fade>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img alt='me' src={halil}  className="max-w-sm rounded-lg shadow-2xl w-full  mask mask-circle object-contain" />
    <div>
      <h1 className="text-5xl font-bold">{t("HiThere")}</h1>
  
      <p className="py-6 text-3xl">{t("ThatsMe")}</p>
      <Link to="about" className="btn btn-secondary">{t("aboutMe")}</Link>

    </div>
  </div>
  </Fade>
</div>  )
}

export default Hero