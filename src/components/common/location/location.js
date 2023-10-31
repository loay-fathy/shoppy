import "./location.css";

const Location = (props) => {
  return (
    <div className="text-secondary border-top border-bottom py-2 mt-3">
      <p className="container">
        <span className="home-link">Home</span> / {props.where}
      </p>
    </div>
  );
};

export default Location;
