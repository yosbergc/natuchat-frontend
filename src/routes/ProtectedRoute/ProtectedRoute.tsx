import React from "react"
import { useContext } from "react"
import { UserContext } from '../../context/UserContext'
import { Navigate } from "react-router"

function ProtectedRoute({ children } : { children: typeof React.Children }) {
    const { user } = useContext(UserContext)
    if (user?.token) {
        return children;
    } else {
        return <Navigate to='/iniciar-sesion'/>
    }
}
export { ProtectedRoute }