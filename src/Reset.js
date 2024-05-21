import resetImg from './assets/ic-reset.svg';

function Reset({ onClick, className }) {
  return (
    <img className={className} src={resetImg} onClick={onClick} alt='초기화' />
  );
}

export default Reset;
