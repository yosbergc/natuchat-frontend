import { Link } from "react-router"
import './login.css'
function Login() {
    return (
        <main>
            <form className="login-form">
                <input type="text" name="username" id="username" placeholder="Tu usuario" />
                <input type="password" name="password" id="password" placeholder="Tu contraseña" />
                <button>Iniciar sesión</button>

                <Link to='/registro'>Registrarme</Link>   
            </form>
        </main>
    )
}
export { Login }