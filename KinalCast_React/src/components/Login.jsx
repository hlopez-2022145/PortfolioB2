import { Input } from "./Input.jsx"
import { useState } from "react"
import { validateEmail, emailValidationMessage } from "../Shared/validators/input.validator.js"
import { validatePassword, passwordValidationMessage } from "../Shared/validators/password.validator.js"
import { useLogin } from "../Shared/hooks/useLogin.jsx"

export const Login = ({ switchAuthHandler }) => {
  const { login, isLoading } = useLogin()

  const [formData, setFormData] = useState(
    {
      email: {
        value: "",
        isValid: false,
        showError: false
      },
      password: {
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
      case 'password':
        isValid = validatePassword(value)
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

  const handleLogin = async (e) => {
    e.preventDefault()
    login(
      formData.email.value,
      formData.password.value
    )
  }

  const isSubmitButtonDisable = !formData.email.isValid ||
    !formData.password.isValid

  return (
    <div className="login-container">
      <form
        className="auth-form"
        onSubmit={handleLogin}
      >
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
          field='password'
          label='Password'
          value={formData.password.value}
          onChangeHandler={onValueChange}
          onBlurHandler={handleValidationOnBlur}
          showErrorMessage={formData.password.showError}
          validationMessage={passwordValidationMessage}
        />
        <button disabled={isSubmitButtonDisable}>
          Iniciar Sesión
        </button>
        <span onClick={switchAuthHandler}>
          ¿No tienes una cuenta? Registrate
        </span>
      </form>
    </div>
  )
}
