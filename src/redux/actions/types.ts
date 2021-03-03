import { User } from '../../configs/common/types'
import * as actions from '../constants/actionTypes';

export interface StatusUpdatedAction{
    type: typeof actions.TASK_STATUS_UPDATED
    payload: {
        title: string
        state: string
    }
}

export interface InitiateLoginRequestAction{
    type: typeof actions.LOGIN_SUCCEEDED,
    payload: {
        jwtToken: string
    }
}

export interface SetCurrentUser{
    type: typeof actions.SET_CURRENT_USER,
    payload: {
        user: User | null
    }
}

export type AuthenticationTypes = InitiateLoginRequestAction | SetCurrentUser
export type RootTypes = AuthenticationTypes | StatusUpdatedAction
