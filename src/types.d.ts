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