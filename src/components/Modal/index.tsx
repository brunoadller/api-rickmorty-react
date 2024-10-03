import React from 'react'

const Modal = () => {
  return (
    <div 
    id="modal" className="modal">
      
        <span 
        id="titleModal"
        style={{ backgroundColor: 'blue', color: 'white', padding: '20px', fontSize: '16px' }}>Personagem não encontrado!</span>
        <img 
        id="closeModal"
        style={{cursor: 'pointer'}}
        src="./close.png" alt="hamburguer-menu"/>
    </div>
  )
}

export default Modal