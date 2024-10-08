import React, { useEffect, useState } from 'react'
import './style.css'
import img from '../../assets/rick.png'
import { useInputContext } from '../../contexts/inputValueContext'
import { useDataContext } from '../../contexts/dataContext'

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
  const [character, setCharacter] = useState<DataCharacterType[]>([])
  const dataCtx = useDataContext()
  const inputCtx = useInputContext()

  const handleClickButton = () => {
    if(inputCtx?.value.trim() !== ""){
      console.log(dataCtx?.data)
      const filterCharacter: DataCharacterType[] | undefined = dataCtx?.data.filter(item =>  item.name.toLowerCase() === inputCtx?.value.trim().toLowerCase())

       if(filterCharacter?.length === 0){
        handleOpenModal(openModal)
          setTimeout(() => {
          handleOpenModal(!openModal)
        },2000)
        inputCtx?.setValue('')
       }else if(filterCharacter?.length !== undefined){
         setCharacter(filterCharacter)
         inputCtx?.setValue('')
       }
      

      
    }else{
      handleOpenModal(openModal)
      setTimeout(() => {
        handleOpenModal(!openModal)
      },2000)

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
           {character.length > 0 && character.map((item, index) => {
              return (
                <div key={index} id="showResult" className="result-container">
                <div id="result-name-container" className="result-name-container">
                    <h1 id="name">{item.name}</h1>
                </div>
                <div id="img-container" className="img-container">
                    <img
                    id="imgCharacter"
                    src={item.image} alt="image-logo"/>
                </div>
             </div>
              )
           })}
           {character.length === 0 &&
           
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
       
           }
           
       </div>
    </main>
  )
}

export default Body