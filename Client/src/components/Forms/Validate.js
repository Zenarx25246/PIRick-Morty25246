

const regexEmail = /^(?=.{1,35}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexPassword =  /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,10})\S$ /;


const Validate = (userData, errors, setErrors) =>{


    if(!userData.email){

        setErrors({...errors, email: "Complete este campo"})

    }

    else if (!regexEmail.test(userData.email)) {
      setErrors({...errors, email: "Debe ser un correo electrónico valido"});
    }

    else{
        setErrors({...errors, email: ""});
    }
  
    if (!userData.password) {
        setErrors({...errors, password: "Complete este campo"});
    }
    else if (!regexPassword.test(userData.password)) {

        setErrors({...errors, password: "Debe ser un password valido"});

    }
    else{
        
        setErrors({...errors, password: " "});
    }
  
  };

export default Validate;

// const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
// const regexPassword =  /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;;


// export const Validate = (userData)=> {
//     let errors = {}

//     if(!regexEmail.test(userData.email)) {
//         errors.email = 'El username debe ser un email valido'
//     }
//     else if (!userData.email) {
//         errors.username = 'El nombre del usuario no puede estar vacio'
//     }
//     else if(userData.email.length > 35) {
//         errors.email = 'El nombre de usuario nmo puede tener mas de 35 caracteres'
//     }
    
//     if(!regexPassword.test(userData.password)) {
//         errors.password = 'La contraseña tiene que tener al menos un número'
//     }

//     if(userData.password.length < 6 && userData.password > 10) {
//         errors.password = 'la contraseña tiene que tener una longitud entre 6 y 10 caracteres.'
//     }
    
//     return errors
// }

// export default Validate;