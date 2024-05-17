import { useState } from 'react'
import { loginRequest } from '../../services/api.js'
import toast from 'react-hot-toast'

export const useLogin = () => {
    const [isLogin, setIsLogin] = useState(false)
    
    const login = async(email, password)=>{
        setIsLogin(true)
        const user = {
            email,
            password
        }
        const response = await loginRequest(user)
        setIsLogin(false)
        if(response.error){
            if(response?.err?.response?.data?.errors){
                let arr = response?.err?.response?.data?.errors
                for (const error of arr) {
                    return toast.error(
                        error.msg
                    )
                }
            }
            return toast.error(
                response?.err?.response?.data?.msg ||
                response?.err?.data?.msg ||
                'Error al registrar el usuario, intenta de nuevo.'
            )
        }
        console.log(response)
    }
    return {
        login,
        isLogin
    }
}