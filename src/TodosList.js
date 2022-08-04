import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodosList = () => {
	const todos = useSelector((state) => state.todos);

	if (todos.length === 0) return <p>Get started and a New Todo!</p>;

	const todoComponents = todos.map((todo) => (
		<Todo key={todo.id} todo={todo} />
	));

	return <ul>{todoComponents}</ul>;
};

export default TodosList;
