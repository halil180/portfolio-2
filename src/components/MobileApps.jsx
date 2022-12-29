import React from "react";
import { Fade } from "react-awesome-reveal";
import bc from "../assets/bc.jpg"
import dictionary from "../assets/dictionary.jpg"
import lumi from "../assets/lumi.jpg"
import random from "../assets/random.jpg"
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
  return (
    <div className="min-h-screen grid  items-center">
      <h1 className="text-center text-6xl	">Mobile Apps</h1>

      <div className="flex flex-wrap justify-center  ">
        {apps.map((app) => (
          <div className={`mockup-phone border-red-500 m-41 `} key={app.id}>
              <Fade cascade>
            <div className="camera " ></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1 bg-gray-700">
                <img className="mask mask-circle  " src={app.src} alt="app icon" />
                <a className="btn btn-outline btn-info mt-5 " href={app.info} target="_blank">
                  Info
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