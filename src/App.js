import TodosList from "./TodosList";
import AddTodoForm from "./AddTodoForm";
import "./App.css";

function App() {
	return (
		<div className="App">
			<section className="hero is-primary">
				<div className="hero-body">
					<h1 className="title">Todo List</h1>
					<p className="subtitle">Now with Redux!</p>
				</div>
			</section>
			<section className="container">
				<AddTodoForm />
				<TodosList />
			</section>
		</div>
	);
}

export default App;
