import HandIcon from './HandIcon'; // import..from으로 이미지를 불러온다.
import HandButton from './HandButton';
import Reset from './Reset';
import { compareHand, generateRandomHand } from './utils';
import { useState } from "react";
import './App.css';

const INITIAL_VALUE = 'rock';

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return '나';
  if (comparison < 0) return '상대';
  return '무승부';
}

function App() {
  // hand와 otherHand를 state로 바꿔 주세요
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);

  const handleButtonClick = (nextHand) => {
    setHand(nextHand);
    const nextOtherHand = generateRandomHand();
    setOtherHand(nextOtherHand);
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    setGameHistory([...gameHistory, nextHistoryItem]);
    const comparison = compareHand(nextHand, nextOtherHand);
    if (comparison > 0) setScore(score + bet);
    if (comparison < 0) setOtherScore(otherScore + bet);
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };

  const handleBetChange = (e) => {
    let num = Number(e.target.value);
    if (num > 9) num %= 10; // 10으로 나눈 나머지 -> 0과 10 사이의 숫자로 만들어 줌
    if (num < 1) num = 1;
    num = Math.floor(num);
    setBet(num);
  };

  return (
    <div className='App'>
      <h1 className='App-heading'>가위바위보</h1>
      <Reset className='App-reset' onClick={handleClearClick} />
      <div className='App-scores'>
        <div className='Score'>
          <div className='Score-num'>{score}</div>
          <div className='Score-name'>나</div>
        </div>
        <div className='App-versus'>:</div>
        <div className='Score'>
          <div className='Score-num'>{otherScore}</div>
          <div className='Score-name'>상대</div>
        </div>
      </div>
      <div className='Box App-box'>
        <div className='Box-inner'>
          <div className='App-hands'>
            <div 
              className={
                'Hand' +
                (gameHistory[gameHistory.length - 1] === '나' ? ' winner' : '')
              }
            >
              <HandIcon className='Hand-icon' value={hand} />
            </div>
            <div className='App-versus'>VS</div>
            <div 
              className={
                'Hand' +
                (gameHistory[gameHistory.length - 1] === '상대' ? ' winner' : '')
              }
            >
              <HandIcon className='Hand-icon' value={otherHand} />
            </div>
          </div>
          <div className='App-bet'>
            <span>배점</span>
            <input 
              type='number'
              value={bet} 
              min={1} 
              max={9} 
              onChange={handleBetChange} 
            />
            <span>배</span>
          </div>
          <div className='App-history'>
            <h2>승부기록</h2>
            <p>{gameHistory.join(', ')}</p>
          </div>
        </div>
      </div>
      <div>
        <HandButton value='rock' onClick={handleButtonClick} />
        <HandButton value='scissor' onClick={handleButtonClick} />
        <HandButton value='paper' onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;