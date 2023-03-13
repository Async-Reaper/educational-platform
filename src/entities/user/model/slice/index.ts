import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User, UserSchema } from "entities/user/types"

const initialState: UserSchema = {}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUserInfo(state, action: PayloadAction<User>) {
            state.data = action.payload;
        }
    }
})