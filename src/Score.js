import './Score.css';
import { useState } from "react";

function Score(props) {
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [playerName, setPlayerName] = useState('');

  const sum = props.playerName === '나' ? score : otherScore;
  return (
    <>
      <div className="Score-num" playerName={playerName}>{sum}</div>
      <div className="Score-name" playerName={playerName}>{playerName}</div>
    </>
  );
}

export default Score;