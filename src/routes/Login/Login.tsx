import { Link } from "react-router"
import { loginService } from '../../services/login.ts'
import { FormEvent, useRef } from "react"
import { Toaster, toast } from "sonner"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext.tsx"
import './login.css'
function Login() {
    const usernameRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const { setUser } = useContext(UserContext)
    async function handleLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (usernameRef.current === null || passwordRef.current === null) return;

        if (usernameRef.current.value === '' || passwordRef.current.value === '') {
            toast.error('Debes rellenar ambos campos para poder iniciar sesión.')
        }

        try {
            const response = await loginService(usernameRef.current.value, passwordRef.current.value)
            if (setUser) {
                setUser(response)
            }
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message)
            }
        }
    }
    return (
        <main>
            <form className="login-form" onSubmit={handleLogin}>
                <input type="text" name="username" id="username" placeholder="Tu usuario" ref={usernameRef} />
                <input type="password" name="password" id="password" placeholder="Tu contraseña" ref={passwordRef}/>
                <button>Iniciar sesión</button>

                <Link to='/registro'>Registrarme</Link>   
            </form>
            <Toaster />
        </main>
    )
}
export { Login }