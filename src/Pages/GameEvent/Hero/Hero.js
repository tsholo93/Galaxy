import { useState, useEffect } from "react";
import heroImage from "../assets/man-focused-while-gaming.jpg";
import "./Hero.css";
import "../../Common/styles/Button.css";

function Hero() {
  return (
    <section className="container-fluid m-0  d-flex flex-column justify-content-end align-items-center galaxy-masthead p-0 m-0">

      <div className="galaxy-hero container py-5">
          <h1>Gaming Mania <br/>Unleashed</h1>
          <p className="text">
            2 Days Extravaganza <br/>
          </p>

          <div className="galaxy-btn">
            <a href="#0" className="btn galaxy-button">
              Register Now
            </a>

          </div>
      </div>

      <Timer />
    </section>
  )
}

function Timer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "December, 31, 2023";
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="galaxy-timer container-fluid p-0 m-0">
      <aside className="timer-wrapper container py-5">
        <ul className="list-unstyled timer-list">
          <li><span>{days} </span>Days</li>
          <li><span>{hours} </span>Hours </li>
          <li><span>{minutes} </span>Minutes </li>
          <li><span>{seconds} </span>Seconds</li>
        </ul>
      </aside>
    </div>
  )
}


export default Hero;
