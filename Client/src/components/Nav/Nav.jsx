import SearchBar from "../Search/SearchBar";
import { Link } from "react-router-dom";
import style from './Nav.module.css'

const Nav = ({onSearch}) => { 
    

return(
    <div className= {style.div}>
         <SearchBar onSearch= {onSearch}/>
            <Link to="/home"  className={style.button}> Home </Link> 
            <Link to="/about" className={style.button}> About </Link> 
            <Link to='/favorites' className={style.button}>Favorites</Link>
    </div>
)
}

export default Nav;