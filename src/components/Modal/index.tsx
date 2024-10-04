import React from 'react'
import './style.css'
import imgClose from '../../assets/close.png'

type Props = {
  openModal: boolean
}
const Modal = ({openModal}: Props) => {
  return (
    <div 

    style={{transform: `${openModal? 'tranlateX(300px)': 'tranlateX(0px)'}`, display: `${openModal? 'flex': 'none'}`}}
    id="modal" className="modal">
      
        <span 
        id="titleModal"
      >Personagem não encontrado!</span>
        <img 
        id="closeModal"
        style={{cursor: 'pointer'}}
        src={imgClose} alt="hamburguer-menu"/>
    </div>
  )
}

export default Modal