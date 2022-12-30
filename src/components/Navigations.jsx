import React from 'react'
import { LanguageContextProvider } from '../context/LanguageContext'

import Navbar from './Navbar'

function Navigations() {
  return (
    <LanguageContextProvider>
    <Navbar></Navbar>
    </LanguageContextProvider>
  )
}

export default Navigations