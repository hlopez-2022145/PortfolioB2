export const validateUsername = (username) =>{
    const regex = /^\S{3,8}$/
    return regex.test(username)
}

export const usernameValidationMessage = 'Nombre de usuario invalido, minimo 3 maximo 8 caracteres. No se aceptan espcios'