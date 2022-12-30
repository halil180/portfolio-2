import React from "react";
import { Fade } from "react-awesome-reveal";
import bc from "../assets/bc.jpg"
import dictionary from "../assets/dictionary.jpg"
import lumi from "../assets/lumi.jpg"
import random from "../assets/random.jpg"
import { useTranslation } from 'react-i18next';
const apps = [
  {
    src: bc,
    info: "https://play.google.com/store/apps/details?id=com.bubble.currency",
    id: 1,
  },
  {
    src: dictionary,
    info: "https://play.google.com/store/apps/details?id=com.lumi.math",
    id: 2,
  },
  {
    src: lumi,
    info: "https://play.google.com/store/apps/details?id=com.lumi.lictionary",
    id: 3,
  },
  {
    src: random,
    info: "https://play.google.com/store/apps/details?id=com.randomNumber.generator",
    id: 4,
  },
];

function MobileApps() {
  const {t} = useTranslation()
  
  return (
    <div className="min-h-screen grid  items-center">
      <h1 className="text-center text-6xl	">{t("mobileApps")}</h1>

      <div className="flex flex-wrap justify-center  ">
        {apps.map((app) => (
          <div className="mockup-phone border-red-500 m-2" key={app.id}>
              <Fade cascade>
            <div className="camera " ></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1 bg-gray-700">
                <img className="mask mask-circle  " src={app.src} alt="app icon" />
                <a className="btn btn-outline btn-info mt-5 px-5-3 " href={app.info} target="_blank">
                <svg  xmlns="http://www.w3.org/2000/svg" width="2em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/></svg>

                </a>
              </div>
            </div>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MobileApps;