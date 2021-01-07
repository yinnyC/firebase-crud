import './App.css';
import React, { useEffect } from 'react';
import Form from './component/Form';
import firebase from './util/firebase';

function App() {
	useEffect(() => {
		const todoRef = firebase.database().ref('Todo');
		todoRef.on('value', (snapshot) => {
			console.log(snapshot.val());
		});
	}, []);
	return (
		<div className="App">
			<h1>Todo</h1>
			<Form />
		</div>
	);
}

export default App;
