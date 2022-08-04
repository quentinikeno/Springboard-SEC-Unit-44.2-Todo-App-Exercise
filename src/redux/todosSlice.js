import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todosSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		add: (state, action) => [...state, action.payload],
		remove: (state, action) =>
			state.filter((todo) => todo.id !== action.payload),
	},
});

export const { add, remove } = todosSlice.actions;

export default counterSlice.reducer;
