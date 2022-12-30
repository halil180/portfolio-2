import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next';

function Career() {
  const  {t} = useTranslation()
  return (
    <div className="hero min-h-screen bg-base-500">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold m-2">{t("myCareer")}</h1>
        <Fade cascade>
        <ul className="steps steps-vertical ">
          <li className="step step-primary z-50">08.2021 - 06.2022 HiCoders </li>
          <li className="step step-primary z-40 ">
            03.2022-07.2022 {t("volunteer")} swisscom
          </li>
          <li className="step step-primary z-30 ">
            08.2022-10.2022 {t("paserelle")}
          </li>
          <li className="step step-primary z-20">
            {" "}
            11.2022-9.2023 {t("intern")}
          </li>
          <li className="step step-primary z-10">
            2023-? {t("BernUni")} 
          </li>

          <li className="step" data-content="?">
            2023-?
          </li>
        </ul>
        </Fade>
      </div>
    </div>
    
  </div>  )
}

export default Career