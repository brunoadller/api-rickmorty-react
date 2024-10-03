import "./style.css"
import imgLogo from '../../assets/rick.png'


const Header = () => {
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

     

    </header>
  )
}

export default Header