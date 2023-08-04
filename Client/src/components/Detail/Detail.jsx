import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";


const Detail =() => {

const {id} =useParams()
const [character, setCharacter] = useState({})
const navigate = useNavigate()



// useEffect(() => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
//        if (data.name) {
//           setCharacter(data);
//        } else {
//           window.alert('No hay personajes con ese ID');
//        }
//     });
//     return setCharacter({});
//  }, [id]);

 useEffect(() => {
  axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
     if (data.name) {
        setCharacter(data);
     } else {
        window.alert('No hay personajes con ese ID');
     }
  });
  return setCharacter({});
}, [id]);

 const handleClick =()=> {
    navigate('/home')
  } 

    return(
        <> 
            <button onClick={handleClick}>Home</button>
            <h2>Detail</h2>
                { character ? (
                        <div >
                        <div>
                          <h2>Name {character.name}</h2>
                          <h2>Status: {character.status}</h2>
                          <h2>Specie: {character.species}</h2>
                          <h2>Gender: {character.gender}</h2>
                          <h2>Origin: {character.origin?.name}</h2>
                        </div>
                        <div>
                           <img 
                            src={character.image} 
                            alt={character.name} 
                           
                            />
                        </div>
                      </div>
                    ) :(
                        ""
                    )
                }
        </>
    )
}

export default Detail;