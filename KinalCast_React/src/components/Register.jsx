import { Input } from "./Input.jsx"
import { useState } from "react"
import { validateEmail, emailValidationMessage } from "../Shared/validators/input.validator.js"
import { usernameValidationMessage, validateUsername } from "../Shared/validators/username.validator.js"
import { passwordValidationMessage, validatePassword } from "../Shared/validators/password.validator.js"
import { passConfirmValidationMessage, validatePasswordConfirm } from "../Shared/validators/passwordConfirm.validator.js"
import { useRegister } from "../Shared/hooks/useRegister.jsx"

export const Register = ({ switchAuthHandler }) => {
    const { register, isLoading } = useRegister()

    const [formData, setFormData] = useState(
        {
            email: {
                value: "",
                isValid: false,
                showError: false
            },
            username: {
                value: "",
                isValid: false,
                showError: false
            },
            password: {
                value: "",
                isValid: false,
                showError: false
            },
            passwordConfirm: {
                value: "",
                isValid: false,
                showError: false
            }
        }
    )

    const onValueChange = (value, field) => {
        setFormData((prevData) => (
            {
                ...prevData,
                [field]: {
                    ...prevData[field],
                    value
                }
            }
        ))
        console.log(formData)
    }

    const handleValidationOnBlur = (value, field) => {
        let isValid = false
        switch (field) {
            case 'email':
                isValid = validateEmail(value)
                break
            case 'username':
                isValid = validateUsername(value)
                break
            case 'password':
                isValid = validatePassword(value)
                break
            case 'passwordConfirm':
                isValid = validatePasswordConfirm(formData.password.value, value)
                break
            default:
                break
        }
        setFormData((prevData) => (
            {
                ...prevData,
                [field]: {
                    ...prevData[field],
                    isValid,
                    showError: !isValid
                }
            }
        ))
        console.log(formData)
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        register(
            formData.email.value,
            formData.username.value,
            formData.password.value
        )
    }

    const isSubmitButtonDisable = !formData.email.isValid ||
        !formData.username.isValid ||
        !formData.password.isValid ||
        !formData.passwordConfirm.isValid
    return (
        <div className="register-container">
            <form
                className="auth-form"
                onSubmit={handleRegister}
            >
                {/* Componente reutilizable INPUT */}
                <Input
                    field='email'
                    label='Email'
                    value={formData.email.value}
                    onChangeHandler={onValueChange}
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.email.showError}
                    validationMessage={emailValidationMessage}
                />

                <Input
                    field='username'
                    label='Username'
                    value={formData.username.value}
                    onChangeHandler={onValueChange}
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.username.showError}
                    validationMessage={usernameValidationMessage}
                />

                <Input
                    field='password'
                    label='Password'
                    value={formData.password.value}
                    onChangeHandler={onValueChange}
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.password.showError}
                    validationMessage={passwordValidationMessage}
                />

                <Input
                    field='passwordConfirm'
                    label='Password Confirm'
                    value={formData.passwordConfirm.value}
                    onChangeHandler={onValueChange}
                    onBlurHandler={handleValidationOnBlur}
                    showErrorMessage={formData.passwordConfirm.showError}
                    validationMessage={passConfirmValidationMessage}
                />
                <button disabled={isSubmitButtonDisable}>
                    Register
                </button>
            </form>
            <span onClick={switchAuthHandler}>
                ¿Ya tenes cuenta? Inicia sesión
            </span>
        </div>
    )
}