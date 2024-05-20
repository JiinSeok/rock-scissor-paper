import className from 'classnames';
import resetImg from './assets/ic-reset.svg';

function Reset({ onClick }) {
  return <img className={className} src={resetImg} onClick={onClick} alt='초기화' />;
}

export default Reset;
