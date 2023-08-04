//import style from './SearchBar.module.css'
import React from 'react';



export default function SearchBar({onSearch}) {

const [id, setId] = React.useState("");


const handleChange = (evento) => {
   setId(evento.target.value) 
}


   return (
      <nav  >
   
         <input /*className={style.input}*/ value={id} type='search' onChange={handleChange} />
       
         <button /*className={style.button}*/ onClick={()=> {onSearch(id); setId("")}}>Agregar</button>
      </nav>
   );
}

