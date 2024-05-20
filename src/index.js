import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

const WINS = {
  rock: 'scissor',
  scissor: 'paper',
  paper: 'rock',
};

function getResult(left, right) {
  if (WINS[left] === right) return '나';
  else if (left === WINS[right]) return '상대';
  return '무승부';
}

function handleClick() {
  console.log('가위바위보!');
}

// const me = 'rock';
// const other = 'scissor';

root.render(
  <App />
);