let myFavorites = [];

const postFav = (req, res) => {

    myFavorites.push(req.body)
    return res.status(200).json(myFavorites)

}

const deleteFav = (req, res) =>{
    const id = req.params;
    const deleteCharacter = myFavorites.filter((character)=>{
        return character.id !== id;
    })
    myFavorites = deleteCharacter
    res.status(200).json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav
}