import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./redux/todosSlice";
import { v4 as uuid } from "uuid";

const AddTodoForm = () => {
	const initialState = "";
	const [task, setTask] = useState(initialState);
	const dispatch = useDispatch();

	const handleChange = (event) => {
		setTask(() => event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(add({ id: uuid(), task, isCompleted: false }));
		setTask(() => initialState);
	};

	return (
		<form className="my-4" onSubmit={handleSubmit}>
			<div className="field">
				<label className="label" htmlFor="newTodo">
					Todo
				</label>
				<div className="control">
					<input
						id="newTodo"
						name="newTodo"
						className="input"
						type="text"
						placeholder="Add a new task to the Todo list..."
						value={task}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="field">
				<div className="control">
					<button className="button is-success">Create Todo</button>
				</div>
			</div>
		</form>
	);
};

export default AddTodoForm;
