import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'appSchaty',
    initialState: {
        roomId: null
    },
    reducers: {
        enterRoom: ( state, action ) => {
            state.roomId = action.payload.roomId;
        }
    }
});

export const { enterRoom } = appSlice.actions;

export const selectRoomId = state => state.appSchaty.roomId;

export default appSlice.reducer;