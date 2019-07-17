import React from 'react';
import sort from 'ramda.sort';
import Chance  from 'chance';
import logo from './logo.svg';
import './App.css';

const chance = Chance();
const drawNumber = (min, max, exclude) => chance.natural({min, max, exclude});

function App() {
	const sixNums = [];
	for (let numbers = 0; numbers <= 5; numbers++) {
		// console.log(sixNums);
		const newNumber = drawNumber(1, 48, sixNums);
		sixNums.push(newNumber);
	}
	const diff = function(a, b) { return a - b; };
	console.log(sort(diff, sixNums));
  return (
    <div className="App"><header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
