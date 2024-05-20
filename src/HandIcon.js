import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';
import './HandIcon.css';
import classNames from 'classnames';

const HAND_IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
}

function HandIcon({ value, className, gameHistory }) { // className prop을 추가하고,
  const src = HAND_IMAGES[value];
  const winner = gameHistory && gameHistory.length > 0 && gameHistory[gameHistory.length - 1] === '나';
  const classNames = `${className} ${winner ? 'winner' : ''}`
  return <img src={src} alt={value} className={classNames} />; // 이 prop을 img 태그에 적용합니다.
}

export default HandIcon;