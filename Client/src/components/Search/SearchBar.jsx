//import style from './SearchBar.module.css'
import React from 'react';
import { useLocation } from "react-router-dom";


export default function SearchBar({onSearch}) {

const [id, setId] = React.useState("");
const { pathname } = useLocation()

const handlerEnter = (event) => {
   if(event.key === 'Enter') {
      onSearch(id)
      setId('')
   }
}   

const handleChange = (evento) => {
   setId(evento.target.value) 
}


   return (
      <nav  >
         { 
            !pathname.includes('/detail') &&
            !pathname.includes('/about') &&
            !pathname.includes('/favorites') &&

         <div>

         <input /*className={style.input}*/ value={id} type='search' onChange={handleChange} onKeyUp={handlerEnter} />
       
          <button /*className={style.button}*/ onClick={()=> {onSearch(id); setId("")} }>Agregar</button>

         </div>
}
      </nav>
   );
}

