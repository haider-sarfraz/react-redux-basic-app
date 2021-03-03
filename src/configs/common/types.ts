export interface User{
    userName: string | null | { [key: string]: any; }
}

export type extractJwt = [
    string,
    any
]