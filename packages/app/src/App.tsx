import React, { useState } from 'react';

import { Button } from '@francesco-lbn/components';

import logo from './logo.svg';
import './App.css';

function App() {
	const [counter, setCounter] = useState(0);
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<Button onClick={() => setCounter((prevCounter) => prevCounter + 1)} />
				<div>the counter is: {counter}</div>
			</header>
		</div>
	);
}

export default App;
