import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentCategory : 0,
    currentSort: {
        name: 'Популярности',
        sortProperty: 'rating',
    },
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCurrentCategory (state, action ) {
            console.log(action)
            state.currentCategory = action.payload;
        }

    },
})

export const { setCurrentCategory } = filterSlice.actions

export default filterSlice.reducer