import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import {useEffect, useState} from 'react';
import axios from "axios"
import About from "./components/About/About"
import Detail from "./components/Detail/Detail";
import Form from './components/Forms/Forms.jsx'
import { Routes, Route,useLocation, useNavigate} from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';



function App() {

   //!Estado local de App   
   const [characters, setCharacters] = useState ([]); 
   const [access, setAccess] = useState(false);


   const location = useLocation()
   const navigate = useNavigate()
  //  const username = "alain.e.j.j@gmail.com";
  //  const pass = "Zenarfy1#";
 
   


  
 //!PIDIENDO INFORMACION A UNA API con axios


//  function onSearch(id) {
//    axios(`https://rickandmortyapi.com/api/character/${id}`)
//      .then(({ data }) => {
//          const characterFind = characters.find((char) => char.id === Number(id))
//          console.log('metodo find',characterFind);

//          if(characterFind) {
//            console.log('entre al if, ya esta en la lista', characterFind);
//            alert('Already in the list!')
//          }
         
//          else if(data.id !== undefined) {
//            setCharacters((character) => [...character, data]);
//          }
//        })

//        .catch((error)=> {
//          console.log('soy el catch', error);
//          alert('Intenta con otro ID')
//        })
//   }

  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
          const characterFind = characters.find((char) => char.id === Number(id))
          console.log('metodo find',characterFind);
 
          if(characterFind) {
            console.log('entre al if, ya esta en la lista', characterFind);
            alert('Already in the list!')
          }
          
          else if(data.id !== undefined) {
            setCharacters((character) => [...character, data]);
          }
        })
 
        .catch((error)=> {
          console.log('soy el catch', error);
          alert('Intenta con otro ID')
        })
   }
 

  //!FILTRAMOS DE CHARACTERS REGRESANDO UN ARRAY NUEVO *CHARACTER* FILTRADO POR ID
 const onClose = (id) =>{ 
   
   const filtro = characters.filter(character => character.id !==Number(id))
   setCharacters(filtro);
 };

const login = (userData) => {
  console.log(userData);
  const { email, password } = userData;
  console.log('userData',email, password);
  const URL = 'http://localhost:3001/rickandmorty/login/';
  axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
     const { access } = data;
     console.log(access);
     setAccess(data);
     access && navigate('/home');
  });
}

//  const login = (userData) =>{
//    if(username === userData.email && pass === userData.password){
//       setAccess(true);
//       navigate("/home");
//    }
//    else{
//       alert("Usuario o contraseña incorrecta");
//    }

//  };

 useEffect(() => {
   access && navigate('/');
},[access, navigate]);





 
   //!Enviamos por props a la funcion onClose y a la informacion de characters
   return (
      <div className='App'>

     {location.pathname !== "/" && <Nav onSearch={onSearch}/>}

      <Routes>
         <Route path="/" element={<Form login={login}/>}/> 
         <Route path="/home" element={<Cards onClose={onClose} characters={characters} /> }/>
         <Route path="/about" element={<About/>}/>
         <Route path="/detail/:id" element={<Detail/>}/>
         <Route path='/favorites'element= { <Favorites/>}
          />
   
     
      </Routes>
        
      </div>
   );
}

export default App;
