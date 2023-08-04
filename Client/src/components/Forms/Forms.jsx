import React from "react";
import Validate from "./Validate"

const Form =({login})=>{

const [userData, setUserData] = React.useState({
    email: "",
    password:" "
});

const [errors, setErrors] = React.useState(
    {
        email: "",
        password: ""
    }
)

const handleChange = (evento)=> {
    const property = evento.target.name;
    const value = evento.target.value;

    setUserData({...userData, [property]: value})
    Validate({...userData, [property]: value},errors, setErrors)

    setUserData((updatedUserData) => {
        Validate(updatedUserData, errors, setErrors);
        return updatedUserData; // Devuelve el estado actualizado
      });

}

const submitHandler = (evento) => {
    evento.preventDefault();
    login(userData);

}


    return (
        <>
        
        <form onSubmit={submitHandler} >
           <div>
            <label name="username">email:
                <input type="text" name="email" placeholder="email" onChange={handleChange}/>
                <p >{errors.email}</p>
            </label>
            </div>
            
            <div>  
            <label name="password">password:
                <input type="text" name="password" placeholder="password" onChange={handleChange}/>
                <p  >{errors.password}</p>
            </label>
                
            </div>
            
            <button type="submit">Submit:</button> 

        </form>
        </>
       
    )
}

export default Form;

// const Form = ({login}) => {
//     const [ userData, setUserData ] = React.useState({
//         email: '',
//         password: ''
//     })

//     const [ errors, setErrors] = React.useState({
//         email: '',
//         password: ''
//     })

//     const handleSubmit = (evento)=> {
//         evento.preventDefault()
//         login(userData)
//     }
//     const handleInputChange = (evento) => {
//         setUserData({
//             ...userData,
//             [evento.target.name] : evento.target.value
//         })
//         setErrors(Validate(
//             {...userData, 
//             [evento.target.name] : evento.target.value
//             }))
//     }

//     return(
//             <form 
//                 onSubmit={handleSubmit}
         
//             >
//                 <div>
//                     <label>Username:</label>
//                     <input 
//                         type="email" 
//                         value={userData.email}
//                         name="email"
//                         onChange={handleInputChange}
//                     />
//                     <br/>
//                     {
//                        errors.email ? (
//                         <span>{errors.email}</span>
//                        ) :
//                        ''
//                     }
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input 
//                         type="password" 
//                         value={userData.password}
//                         name="password"
//                         onChange={handleInputChange}
//                     />
//                     <br/>
//                     {
//                         errors.password ? (
//                             <span>{errors.password}</span>
//                         ) :
//                         ''
//                     }
//                 </div>
//                 <button type="submit">Log in</button>
//             </form>
        
//     )
// }


// export default Form