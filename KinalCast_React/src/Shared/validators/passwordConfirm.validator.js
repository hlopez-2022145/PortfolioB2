export const validatePasswordConfirm = (pass, confirmPass) =>{
    return pass === confirmPass
}

export const passConfirmValidationMessage = 'La contraseña no coincide'