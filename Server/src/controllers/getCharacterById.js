// const axios = require("axios");


// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`).then((response)=>{
//         const  {id, name, gender, species, origin, image, status } = response.data;
//         res.writeHead(200,{"Content-Type":"application/json"})
//         res.end(JSON.stringify( {id, name, gender, species, origin, image, status }));

//     }).catch((error) => { 
        
//     res.writeHead(500,({"Content-Type":"text/plain"}));
//     res.end(error.message);
//  });


// }

// module.exports = getCharById;
const axios = require("axios");


const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) =>{
const {id} = req.params;

axios(URL+id)
.then(({ data })=>{
    const { id, status, name, species, origin, image, gender} = data;
    const character = { id, status, name, species, origin, image, gender}
        
    return character ? res.status(200).json(character) : res.status(404).send("Not found")

})

.catch((error)=>{
    return res.status(500).send(error.message)
    
})
}

module.exports = {getCharById};