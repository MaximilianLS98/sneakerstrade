import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSneakers = createAsyncThunk(
    'sneakers/fetchSneakers',
    async () => {
        const response = await fetch('https://sneakerspot-server.herokuapp.com/sneakers');
        const sneakers = await response.json();
        window.localStorage.setItem('sneakers', JSON.stringify(sneakers));
        return sneakers;
    }
);

export const sneakersSlice = createSlice({
    name: 'sneakers',
    initialState: {
        sneakers: window.localStorage.getItem('sneakers') ? JSON.parse(window.localStorage.getItem('sneakers')) : [],
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

export const { setSneakers, deleteSneaker, addSneaker, updateSneaker } = sneakersSlice.actions;
export default sneakersSlice.reducer;
