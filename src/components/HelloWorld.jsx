import React from 'react'
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';

function HelloWorld() {

  const {t} = useTranslation()
  
  return (
    <div className="hero min-h-screen bg-fixed bg-center bg-no-repeat" style={{ backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/003/549/556/original/space-galaxy-background-free-vector.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <Zoom>
      <h1 className="mb-5 text-5xl font-bold">Hello World</h1>
      <p className="mb-5 text-2xl">{t("asAFullstack")}</p>
      </Zoom>
    </div>
  </div>
</div>  )
}

export default HelloWorld