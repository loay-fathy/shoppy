import CountDown from "../common/countDown/CountDown";
import "./Deal.css";
import Button from "../common/button/Button";
import { useState } from "react";

const Deal = () => {
  const countDownDate = new Date("nov 26, 2023 00:00:00").getTime();
  const [now, setNow] = useState();
  const [distance, setDistance] = useState();
  const [secondes, setSecondes] = useState();
  const [minutes, setMinutes] = useState();
  const [hours, setHours] = useState();
  const [days, setDays] = useState();

  setInterval(() => {
    setNow(new Date().getTime());
    setDistance(countDownDate - now);

    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSecondes(Math.floor((distance % (1000 * 60)) / 1000));
  }, 1000);

  return (
      <div className="deal">
        <div className="text-center">
          <p className="">Super sale 30% off</p>
          <h2>Best electronics deals</h2>
          <div className="countDown text-center">
            <CountDown time={days} timeTitle="days" />
            <CountDown time={hours} timeTitle="hours" />
            <CountDown time={minutes} timeTitle="minutes" />
            <CountDown time={secondes} timeTitle="secondes" />
          </div>
          <Button text ="shop now" />
        </div>
      </div>
  );
};

export default Deal;
