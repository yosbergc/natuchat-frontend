import { createContext, useState } from "react";
import { User } from "../types";
const UserContext = createContext<{ user: User | null; setUser: React.Dispatch<React.SetStateAction<User | null>> | null }>({ user: null, setUser: null });

function UserContextProvider({ children }: { children: JSX.Element }) {
    const [user, setUser] = useState<User | null>(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserContextProvider };
