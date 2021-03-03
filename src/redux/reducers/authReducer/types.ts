import { User } from '../../../configs/common/types'

export interface Authentication{
    isAuthenticated: boolean
    user: User | null
}