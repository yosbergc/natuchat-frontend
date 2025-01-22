export type Message = {
    id: number,
    user: string,
    message: string
}

export type ChatState = Message[]

interface UserLogged {
    id: number,
    user: string,
    token: string
}

export type User = UserLogged | null;

export type UserContextType = {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>> | null;
    handleLogout: () => void;
};