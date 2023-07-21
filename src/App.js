import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import {useEffect, useState} from 'react';
import axios from "axios"
import About from "./components/About/About"
import Detail from "./components/Detail/Detail";
import Form from './components/Forms/Forms.jsx'
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';




function App() {

   const navigate = useNavigate();
   const { pathname } = useLocation();
   const username = "alain.e.j.j@gmail.com";
   const pass = "Zenarfy1#";
 
   


   //!Estado local de App   
   const [characters, setCharacters] = useState ([]); 
   const [access, setAccess] = useState(false);

 //!PIDIENDO INFORMACION A UNA API con axios
  const  onSearch = (id) => { 
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
        
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
  //!FILTRAMOS DE CHARACTERS REGRESANDO UN ARRAY NUEVO *CHARACTER* FILTRADO POR ID
 const onClose = (id) =>{ 
   
   const filtro = characters.filter(character => character.id !==Number(id))
   setCharacters(filtro);
 };

 const login = (userData) =>{
   if(username === userData.email && pass === userData.password){
      setAccess(true);
      navigate("/home");
   }
   else{
      alert("Usuario o contraseña incorrecta");
   }

 };

 useEffect(() => {
   !access && navigate('/');
},[access, navigate]);





 
   //!Enviamos por props a la funcion onClose y a la informacion de characters
   return (
      <div className='App'>

     { pathname !== "/" && <Nav onSearch={onSearch}/>}

      <Routes>
         <Route path="/" element={<Form login={login}/>}/> 
         <Route path="/home" element={<Cards onClose={onClose} characters={characters} /> }/>
         <Route path="/about" element={<About/>}/>
         <Route path="/detail/:id" element={<Detail/>}/>
   
     
      </Routes>
        
      </div>
   );
}

export default App;
