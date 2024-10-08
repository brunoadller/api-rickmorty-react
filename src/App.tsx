import { useState } from 'react'
import './App.css'
import { DataContextProvider } from './contexts/dataContext'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { InputContextProvider } from './contexts/inputValueContext'
import Modal from './components/Modal'
import Menu from './components/Menu'


function App() {
  const [openModal, setOpenModal]  = useState(false)
  const [isMessage, setIsMessage] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleOPenModal = (b:boolean) => {
    setOpenModal(!b)
    
  }
  const handleCloseModal = (b:boolean) => {
     setOpenModal(!b)
  }
  const handleChangeMessage = (m:boolean) => {
    setIsMessage(!m)
  }
  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }
  const handleCloseMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }
  return (
    <DataContextProvider>
      <InputContextProvider>
        {openModal &&  <Modal openModal = {openModal} isMessage = {isMessage}/>}
        <Header handleOpenMenu = {handleOpenMenu}/>
        <Body openModal = {openModal} handleOpenModal = {handleOPenModal}  handleChangeMessage = {handleChangeMessage}/>
        <Footer/>
        <Menu isOpenMenu = {isOpenMenu} handleCloseMenu = {handleCloseMenu}/>
      </InputContextProvider>
    </DataContextProvider>
  )
}

export default App
