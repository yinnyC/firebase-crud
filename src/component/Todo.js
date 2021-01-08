import React from 'react';
import firebase from '../util/firebase';
import '../App.css';
function Todo(props) {
	const deleteTodo = () => {
		const todoRef = firebase.database().ref('Todo').child(props.todo.id);
		todoRef.remove();
	};
	const completeTodo = () => {
		const todoRef = firebase.database().ref('Todo').child(props.todo.id);
		todoRef.update({
			complete: !props.todo.complete,
		});
	};
	return (
		<div>
			<h2 className={props.todo.complete ? 'complete' : ''}>
				{props.todo.title}
			</h2>
			<button onClick={deleteTodo}>Delete</button>
			<button onClick={completeTodo}>complete</button>
		</div>
	);
}
export default Todo;
