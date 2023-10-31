import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentPage: 1,
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
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
    },
})

export const { setCurrentCategory, setSort, setCurrentPage } = filterSlice.actions

export default filterSlice.reducer