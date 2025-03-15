import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: []
};

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload);
        }
    }
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
