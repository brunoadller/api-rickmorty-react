import { useEffect, useState } from 'react'
import './App.css'
import { getData } from './data'
import { DataContextProvider } from './contexts/dataContext'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { InputContextProvider } from './contexts/inputValueContext'
import Modal from './components/Modal'

type DataCharacterType  = {
  gender: string,
  id: number,
  image: string,
  name: string
  species: string,
  status: string
}
function App() {
  const [openModal, setOpenModal]  = useState(false)
  const [dataCharacter, setDataCharacter] = useState<DataCharacterType[]>([])


  const handleOPenModal = (b:boolean) => {
    console.log(b)
    setOpenModal(!b)
    console.log(b)
  }

  return (
    <DataContextProvider>
      <InputContextProvider>
        {openModal &&  <Modal openModal = {openModal} />}
        <Header/>
        <Body openModal = {openModal} handleOpenModal = {handleOPenModal}/>
        <Footer/>
      </InputContextProvider>
    </DataContextProvider>
  )
}

export default App
