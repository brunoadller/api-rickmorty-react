import React from 'react'
import hamburgerMneu from '../../assets/close.png'
import './style.css'
type Props = {
  isOpenMenu: boolean
  handleCloseMenu: () => void
}
const Menu = ({isOpenMenu, handleCloseMenu}: Props) => {

  const handleClickCloseMenu = () => {
    handleCloseMenu()
  }
  return (
      <div style={{transform: `${isOpenMenu? 'translateX(0px)': 'translateX(200px)'}`}} id="openMenu" className="openMenu">
        <img onClick={handleClickCloseMenu} src={hamburgerMneu} alt="hamburguer-menu"/>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
        </ul>
      </div>
  )
}

export default Menu