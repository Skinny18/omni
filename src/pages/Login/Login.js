import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import './login.css'
import { useAuthentication } from "../../hooks/useAuthentication"

const Login = () => {
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[error, setError] = useState("")

    const{login, error: authError, loading} = useAuthentication()

    const handleSubmit = async (e) =>{
        e.preventDefault()

        setError("")

        const user = {
            email,
            password,
           
        }

    
        const res = await login(user)

        console.log(res)
    }

    useEffect(() =>{
        if(authError){
            setError(authError)
        }
    },[authError])
  return (
    <div className="login">
        <h1>Entrar</h1>
        <form onSubmit={handleSubmit}>
         
            <label>
                <span>E-mail:</span>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" required placeholder="E-mail do usuário"/>
            </label>

            <label>
                <span>Senha:</span>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" required placeholder="Senha do usuário"/>
            </label>

            
            {!loading &&<button className="btn"><NavLink to="/dashboard">Entrar</NavLink></button>}
            {loading && <button className="btn" disable>Aguarde...</button>}
            {error && <p className="error">{error}</p>}
            
            
        </form>
    </div>
  )
}

export default Login