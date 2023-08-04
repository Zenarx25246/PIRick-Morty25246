
import style from './Card.module.css'
import { Link, useLocation } from "react-router-dom";
import {connect} from "react-redux";
import { addFavorite, removeFavorite } from '../../redux/action';
import React from 'react';

 function Card({ name, species, gender, image, onClose, id, addFavorite, removeFavorite, myFavorites  }) {
   
   const [isFav, setIsFav] = React.useState(false);
   const { pathname } = useLocation()

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false)
         removeFavorite(id)
      }
      else {
         setIsFav(true)
         addFavorite({ id, name, species, gender, image })
      }
   }

   React.useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites,id])
   
   return (
      <div className= {style.card}>

         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) 
   : 
   (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         {
            !pathname.includes('/favorites') &&
               <button 
                  onClick={()=> {onClose(id)}} >
                     X
               </button>
         }

        {/* <button onClick={() =>{onClose(id)}}>X</button> */}

         <Link to={`/detail/${id}`}>
            <h2> {name} </h2>
         </Link>

       
         <div >
            <h4> {id} </h4>
            <h2> {species}</h2>
            <h2> {gender}</h2>
         </div>
         <img  src={image} alt={name}  />
      </div>
   );
}

const mapStateToProps = (state)=> {
   return {
      myFavorites: state.myFavorites
   }

}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => dispatch(addFavorite(character)),
      removeFavorite: (id)=> dispatch((removeFavorite(id)))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);



