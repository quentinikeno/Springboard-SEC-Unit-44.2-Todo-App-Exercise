import { useDispatch } from "react-redux";
import { remove } from "./redux/todosSlice";

const Todo = ({ todo }) => {
	const { id, task, isCompleted } = todo;
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(remove(id));
	};

	return (
		<li
			className={`box is-flex is-justify-content-space-between ${
				isCompleted ? "completed" : null
			}`}
		>
			<span>{task}</span>
			<button
				className="button is-danger is-light is-small"
				onClick={handleDelete}
			>
				Delete
			</button>
		</li>
	);
};

export default Todo;
