import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import { DataContextProvider } from './contexts/dataContext'
import Footer from './components/Footer'
import Body from './components/Body'


function App() {
  
 

  return (
    <DataContextProvider>
      <Header/>
      <Body />
      <Footer />
    </DataContextProvider>
  )
}

export default App
