import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentCategory : 0,
    sort: {
        name: 'Популярности',
        sortProperty: 'rating',
    },
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCurrentCategory (state, action ) {
            state.currentCategory = action.payload;
        },
        setSort (state, action) {
            state.sort = action.payload;
        }

    },
})

export const { setCurrentCategory, setSort } = filterSlice.actions

export default filterSlice.reducer