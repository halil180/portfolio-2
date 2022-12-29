import React from "react";
import Hero from "../components/Hero";
import MobileApps from "../components/MobileApps";
import ShortVids from "../components/ShortVids";
import ContactMe from "../components/ContactMe";
import DesktopApp from "../components/DesktopApp";

function Home() {
  return (
    <>
      <Hero />
      <MobileApps />
      <ShortVids />
      <DesktopApp />
      <ContactMe />
    </>
  );
}
export default Home;