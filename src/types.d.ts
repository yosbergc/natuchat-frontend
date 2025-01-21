export type Message = {
    id: number,
    user: string,
    message: string
}

export type ChatState = Message[]