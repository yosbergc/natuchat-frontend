import { Link } from "react-router"
function Register() {
    return (
        <main>
            <form className="register-form">
                <input type="text" name="username" id="username" placeholder="Tu usuario" />
                <input type="email" name="email" id="email" placeholder="Tu correo electrónico" />
                <input type="password" name="password" id="password" placeholder="Tu contraseña" />
                <button>Iniciar sesión</button>

                <Link to='/iniciar-sesion'>Iniciar sesión</Link>   
            </form>
        </main>
    )
}
export { Register }