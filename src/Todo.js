import { useDispatch } from "react-redux";
import { remove, toggleCompleted } from "./redux/todosSlice";
import "./Todo.css";

const Todo = ({ todo }) => {
	const { id, task, isCompleted } = todo;
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(remove(id));
	};

	const toggleTodo = () => {
		dispatch(toggleCompleted(id));
	};

	return (
		<li className={"box is-flex is-justify-content-space-between"}>
			<span className={`${isCompleted ? "completed" : null}`}>
				{task}
			</span>
			<div className="buttons">
				<button
					className="button is-success is-light is-small"
					onClick={toggleTodo}
				>
					{isCompleted ? "Unmark" : "Mark"} Completed
				</button>
				<button
					className="button is-danger is-light is-small"
					onClick={handleDelete}
				>
					Delete
				</button>
			</div>
		</li>
	);
};

export default Todo;
