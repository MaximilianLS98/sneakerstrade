import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSneakers = createAsyncThunk(
    'sneakers/fetchSneakers',
    async () => {
        const response = await fetch('http://localhost:3000/sneakers');
        const sneakers = await response.json();
        return sneakers;
    }
);

export const sneakersSlice = createSlice({
    name: 'sneakers',
    initialState: {
        sneakers: [],
        status: 'idle',
    },
    reducers: {
        setSneakers: (state, action) => {
            state.sneakers = action.payload;
            window.localStorage.setItem('sneakers', JSON.stringify(action.payload));
        },
        deleteSneaker: (state, action) => {
            state.sneakers = state.sneakers.filter(sneaker => sneaker.id !== action.payload);
            window.localStorage.setItem('sneakers', JSON.stringify(state.sneakers));
        },
        addSneaker: (state, action) => {
            state.sneakers.push(action.payload);
            window.localStorage.setItem('sneakers', JSON.stringify(state.sneakers));
        },
        updateSneaker: (state, action) => {
            state.sneakers = state.sneakers.map(sneaker => {
                if (sneaker.id === action.payload.id) {
                    return action.payload;
                }
                return sneaker;
            });
            window.localStorage.setItem('sneakers', JSON.stringify(state.sneakers));
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchSneakers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSneakers.fulfilled, (state, action) => {
                state.status = 'idle';
                state.sneakers = action.payload;
            })
            .addCase(fetchSneakers.rejected, (state) => {
                state.status = 'error';
            });
    }
});

export const { setSneakers, deleteSneaker, addSneaker } = sneakersSlice.actions;
export default sneakersSlice.reducer;
