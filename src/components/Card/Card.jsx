
import style from './Card.module.css'
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import { addFavorite, removeFavorite } from '../../redux/action';
import React from 'react';

 function Card({ name, status, species, gender, origin, image, onClose, id, addFavorite, removeFavorite  }) {
   
   const [isFav, setIsFav] = React.useState(false);

   const handleFavorite = ()=> {
      if(isFav){
         setIsFav(false);
         removeFavorite(id);
   }else{
      setIsFav(true);
      addFavorite(name);
   }
}
   
   return (
      <div className= {style.card}>

         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         <button onClick={() =>{onClose(id)}}>X</button>

         <Link to={`/detail/${id}`}>
            <h2> {name} </h2>
         </Link>

       <div>
         
       <h2>Especie: {species}</h2>
         <h2>Genero: {gender} </h2>
        
        
         <img  src={image} alt= {name} />

       </div>
       
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFavorite: (character) => {
      dispatch(addFavorite(character));
      },
      removeFavorite: (id) => {
      dispatch(removeFavorite(id));
      },
   };
};

export default connect(null, mapDispatchToProps)(Card);



