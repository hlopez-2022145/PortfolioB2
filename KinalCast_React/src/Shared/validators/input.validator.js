//Validacion de email

export const validateEmail = (email) =>{
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
}

export const emailValidationMessage = 'Por favor ingresa un correo valido'