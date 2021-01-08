import './App.css';
import React from 'react';
import Form from './component/Form';
import TodoList from './component/TodoList';

function App() {
	return (
		<div className="App">
			<h1>Todo</h1>
			<Form />
			<TodoList />
		</div>
	);
}

export default App;
