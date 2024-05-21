import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';
import './HandIcon.css';

const HAND_IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

function HandIcon({ value, className }) { // className prop을 추가하고,
  const src = HAND_IMAGES[value];
  return <img src={src} alt={value} className={className} />; // 이 prop을 img 태그에 적용합니다.
}

export default HandIcon;