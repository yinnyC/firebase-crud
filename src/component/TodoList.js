import React, { useEffect, useState } from 'react';
import firebase from '../util/firebase';
import Todo from './Todo';
function TodoList() {
	const [todoList, setTodoList] = useState([]);
	useEffect(() => {
		const todoRef = firebase.database().ref('Todo');
		todoRef.on('value', (snapshot) => {
			const todos = snapshot.val();
			const tempList = [];
			for (let id in todos) {
				tempList.push({ id, ...todos[id] });
			}
			setTodoList(tempList);
		});
	}, []);
	return (
		<div>
			<h1>To-do list</h1>
			{todoList
				? todoList.map((todo) => <Todo todo={todo} key={todo.id} />)
				: ''}
		</div>
	);
}

export default TodoList;
