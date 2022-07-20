import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    sneakers: [],
    status: 'idle',
    error: null
}

export const sneakerSlice = createSlice({
    name: 'sneakers',
    initialState,
    reducers: {
        populateSneakers: (state, action) => {
            console.log(action.payload, 'payload in populateSneakers')
            state.sneakers = action.payload;
            return state
        },
        addSneaker: (state, action) => {
            state.sneakers.push(action.payload);
            return state
        },
        deleteSneaker: (state, action) => {
            state.sneakers = state.sneakers.filter(sneaker => sneaker.id !== action.payload)
            return state
        },
        fetchSneakersStart: (state) => {
            state.status = 'loading';
        },
        fetchSneakersSuccess: (state, action) => {
            state.sneakers = action.payload;
            state.status = 'idle';
        },
        fetchSneakersFailure: (state, action) => {
            state.error = action.payload;
            state.status = 'error';
        }
    },
});

    export const { populateSneakers, fetchSneakersStart, fetchSneakersSuccess, fetchSneakersFailure, addSneaker, deleteSneaker } = sneakerSlice.actions;
    export default sneakerSlice.reducer;
