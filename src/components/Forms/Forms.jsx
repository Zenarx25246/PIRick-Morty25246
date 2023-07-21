import React from "react";
import Validate from "./Validate"

const Form =({login})=>{

const [userData, setUserData] = React.useState({
    email: " ",
    password:" "
});

const [errors, setErrors] = React.useState(
    {
        email: " ",
        password: ""
    }
)

const handleChange = (evento)=> {
    const property = evento.target.name;
    const value = evento.target.value;

    setUserData({...userData, [property]: value})
    Validate({...userData, [property]: value},errors, setErrors)

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