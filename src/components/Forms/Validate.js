

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