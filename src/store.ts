import { configureStore } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

export interface IAuth {
    user?: Record<string, any>;
}

export interface IRootState {
    auth: IAuth;
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            username: 'reut'
        },
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
    },
})

export const { setUser } = authSlice.actions

export default configureStore({
    reducer: {
        auth: authSlice.reducer
    },
})