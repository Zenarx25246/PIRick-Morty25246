
import { connect } from "react-redux"
import Card from "../Card/Card"
import { filterCards, orderCards } from "../../redux/action"
import { useDispatch } from "react-redux"


const Favorites = ({ myFavorites }) => {

    const dispatch = useDispatch()

    const handleOrder = (evento) =>{
        dispatch(orderCards(evento.target.value))
    }

    const handleFilter = (evento) => {
        dispatch(filterCards(evento.target.value))
    }

    return (
        <>
       <h2>My Favorites</h2>
        <div >
             <div>
                <select onChange={handleOrder}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>

                <select onChange={handleFilter}>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            
            </div>
        </div>

       

        {
            myFavorites.length === 0 ? (
                <h3 >Empty favorites list! </h3>
            ) :
             myFavorites.map((character) => {

                return(
                    <Card key={character.id}
                    id= {character.id}
                    name = {character.name}
                    species={character.species}
                    gender={character.gender}
                    image={character.image}
                   />
                )
               
                
            })
                
            
        }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }

}

export default connect(mapStateToProps, null)(Favorites)
