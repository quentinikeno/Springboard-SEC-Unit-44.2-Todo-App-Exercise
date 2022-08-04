import Hero from "./Hero";
import TodosList from "./TodosList";
import AddTodoForm from "./AddTodoForm";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Hero />
			<section className="container">
				<AddTodoForm />
				<TodosList />
			</section>
		</div>
	);
}

export default App;
