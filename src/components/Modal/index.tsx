import React from 'react'
import './style.css'
import imgClose from '../../assets/close.png'

type Props = {
  openModal: boolean
  isMessage: boolean
}
const Modal = ({openModal, isMessage}: Props) => {
  const message = ["Preencha com um nome por favor!", "Nome não encontrado!"]
  return (
    <div 

    style={{transform: `${openModal? 'translateX(0px)': 'translateX(300px)'}`, display: `${openModal? 'flex': 'none'}`}}
    id="modal" className="modal">
      
        <span 
        id="titleModal"
      >{isMessage ? message[1] : message[0]}</span>
        <img 
        id="closeModal"
        style={{cursor: 'pointer'}}
        src={imgClose} alt="hamburguer-menu"/>
    </div>
  )
}

export default Modal