import "./CountDown.css";
const CountDown = (props) => {
  return (
    <div>
      <div className="time">{props.time}</div>
      <p>{props.timeTitle}</p>
    </div>
  );
};

export default CountDown;
