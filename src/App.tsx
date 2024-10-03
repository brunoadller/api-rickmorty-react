import { useEffect, useState } from 'react'
import './App.css'
import { getData } from './data'

type DataCharacterType  = {
  gender: string,
  id: number,
  image: string,
  name: string
  species: string,
  status: string
}
function App() {
  const [data, setData] = useState([])
 const [dataCharacter, setDataCharacter] = useState<DataCharacterType[]>([])


 useEffect(() => {
   getData()
   .then(res => res.json())
   .then(body => {
      setData(body.results)
      console.log(data)
   }).catch((e) => {
    console.log("Erroq na requisição: ", e)
   })
 }, [])

  return (
    <div>
      hello
    </div>
  )
}

export default App
