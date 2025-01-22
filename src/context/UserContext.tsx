import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { User } from "../types";
import { UserContextType } from "../types";
const UserContext = createContext<UserContextType>({
    user: null,
    setUser: null,
    handleLogout: () => {}
});

function UserContextProvider({ children }: { children: JSX.Element }) {
    const [user, setUser] = useState<User | null>(() => {
        const userLocal = window.localStorage.getItem('user')

        if (userLocal) {
            return JSON.parse(userLocal);
        }
        return null;
    });

    const navigate = useNavigate()
    useEffect(() => {
        if (!user) return;
        navigate('/chat')
    }, [user, navigate])

    useEffect(() => {
        if (!user) return;

        const userLocal = window.localStorage.getItem('user')

        if (!userLocal) {
            window.localStorage.setItem('user', JSON.stringify(user))
        }
    }, [user])

    function handleLogout() {
        window.localStorage.removeItem('user')
        setUser(null)
    }
    return (
        <UserContext.Provider value={{ user, setUser, handleLogout }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserContextProvider };
