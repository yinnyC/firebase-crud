import React, { useState } from 'react';
import firebase from '../util/firebase';
function Form() {
	const [title, setTitle] = useState('');
	const inputHandler = (e) => {
		setTitle(e.target.value);
	};
	const createTodo = () => {
		setTitle('');
		const todoRef = firebase.database().ref('Todo');
		const todo = {
			title,
			complete: false,
		};
		todoRef.push(todo);
	};
	return (
		<div>
			<input type="text" value={title} onChange={inputHandler} />
			<button onClick={createTodo}>Add Todo</button>
		</div>
	);
}

export default Form;
