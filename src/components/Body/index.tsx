import React, { useEffect, useState } from 'react'
import './style.css'
import img from '../../assets/rick.png'
import { useInputContext } from '../../contexts/inputValueContext'

type DataCharacterType  = {
  gender: string,
  id: number,
  image: string,
  name: string
  species: string,
  status: string
}
type Props = {
  openModal: boolean
  handleOpenModal: (b:boolean) => void
}
const Body = ({openModal, handleOpenModal}: Props) => {
  const inputCtx = useInputContext()

  const handleClickButton = () => {
    if(inputCtx?.value.trim() === ""){
      handleOpenModal(openModal)
      setTimeout(() => {
        handleOpenModal(!openModal)
      },2000)

    }else{

    }
  }
  return (
    <main>
       <div className="main-container">
           <div className="search-container">
             <input 
             value={inputCtx?.value}
             onChange={e => inputCtx?.setValue(e.target.value)}
             id="value"
             type="text" placeholder="Personagem..."/>
             <button onClick={handleClickButton} id="button">Buscar</button>
           </div>
           
           <div  id="showResult" className="result-container">
              <div id="result-name-container" className="result-name-container">
                  <h1 id="name">Busque seu Personagem</h1>
              </div>
              <div id="img-container" className="img-container">
                  <img
                  id="imgCharacter"
                  src={img} alt="image-logo"/>
              </div>
           </div>
          
           
       </div>
    </main>
  )
}

export default Body