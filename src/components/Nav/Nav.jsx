import SearchBar from "../Search/SearchBar";
import { Link } from "react-router-dom";
import style from './Nav.module.css'

const Nav = ({onSearch}) => { 
    

return(
    <div className= {style.div}>
        <SearchBar  onSearch={onSearch}/>
      
        
        <Link to="/about">
        <button className={style.button}>About</button>
        </Link>
       
        <Link to="/home">
        <button className={style.button}>Home</button>
        </Link>
      
    </div>
)
}

export default Nav;