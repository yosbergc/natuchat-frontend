import { Link } from "react-router"
import { registerService } from "../../services/register"
import { FormEvent } from "react"
import { useRef } from "react"
import { Toaster, toast } from "sonner"

function Register() {
    const usernameRef = useRef<HTMLInputElement | null>(null)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (usernameRef.current === null || passwordRef.current === null || emailRef.current === null) return;
        if (usernameRef.current.value === '' || passwordRef.current.value === '' || emailRef.current.value === '') {
            toast.error('Debes rellenar todos los campos para registrarte.')
        }

        try {
            const response = await registerService(usernameRef.current.value, emailRef.current.value, passwordRef.current.value)
            toast.success(response?.message)
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message)
            }
        }
    }
    return (
        <main>
            <form className="register-form" onSubmit={handleSubmit}>
                <input type="text" name="username" id="username" placeholder="Tu usuario" ref={usernameRef}/>
                <input type="email" name="email" id="email" placeholder="Tu correo electrónico" ref={emailRef}/>
                <input type="password" name="password" id="password" placeholder="Tu contraseña" ref={passwordRef}/>
                <button>Registrarme</button>

                <Link to='/iniciar-sesion'>Iniciar sesión</Link>   
            </form>
            <Toaster />
        </main>
    )
}
export { Register }