import "./style.css"
import imgLogo from '../../assets/rick.png'
import cardapio from '../../assets/cadapio.png'

type Props = {
  handleOpenMenu: () => void
}

const Header = ({handleOpenMenu}: Props) => {


  const HandleClickOpenMenu  = () => {
     handleOpenMenu()
  }
  return (
    <header>
       <div className="img-container">
           <img src={imgLogo} alt="" />
       </div>

       <ul>
        <li>
            <a href="/">home</a>
        </li>
        <li>
            <a href="/">about</a>
        </li>
       </ul>

        <div className="cardapio-menu">
          <img onClick={HandleClickOpenMenu} src={cardapio} alt="cardapio-menu" />
        </div>

    </header>
  )
}

export default Header