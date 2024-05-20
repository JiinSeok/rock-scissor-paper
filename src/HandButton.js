import HandIcon from "./HandIcon";
import './HandButton.css'; // HandButton.css 파일을 불러옵니다

function HandButton({ value, onClick }) { // 이건 뭘까?
  const handleClick = () => onClick(value);
  return ( // button에 'HandButton' 클래스를 적용해 주세요. HandIcon 에 'HandButton-icon' 클래스를 적용해 주세요.
    <button onClick={handleClick} className="HandButton"> 
      <HandIcon value={value} className="HandButton-icon"/>
    </button>
  );
}

export default HandButton;