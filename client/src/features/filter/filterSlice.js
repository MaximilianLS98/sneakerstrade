import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";



const sneakerSlice = createSlice({
    name: "sneakerFilter",
    initialState: {
        sneakers: [],
        status: "idle",
        filter: "",
    },
    reducers: {
        // filter the sneakers based on brand
        filterSneakers: (state, action) => {
            state.sneakers = state.sneakers.filter(sneaker => {
                return sneaker.brand.toLowerCase().includes(action.payload.toLowerCase());
            }
            );
        }
    }
});