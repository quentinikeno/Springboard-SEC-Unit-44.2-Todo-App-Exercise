import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todosSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		add: (state, action) => [...state, action.payload],
		remove: (state, action) =>
			state.filter((todo) => todo.id !== action.payload),
		toggleCompleted: (state, action) =>
			state.map((todo) =>
				todo.id === action.payload
					? { ...todo, isCompleted: !todo.isCompleted }
					: todo
			),
	},
});

export const { add, remove, toggleCompleted } = todosSlice.actions;

export default todosSlice.reducer;
