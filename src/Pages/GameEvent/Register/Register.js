import Form from "./Form/Form";
import Banner from '../Common/Banner.js'

import './Register.css'
import "../styles/layout.css";
import img from "../assets/man-computer.jpg";

function Register() {
  return (
    <section className="register container-fluid p-0 m-0">
      <div className="row g-0">
        <div className="col-md-6 col-xl-3 p-0 m-0 order-1 order-md-0">
          <Banner
            ctnNum={32}
            ctnText={"Workshop"}
            style={{
              background: "#201D73",
              height: "100%"
            }}
          />
        </div>
        <div className="col-md-6 col-xl-3 p-0 m-0 order-first order-xl-0">
          <Image />
        </div>
        <div className="col-md-12 col-xl-6 p-0 m-0">
          <RegisterContent/>
        </div>
      </div>
    </section>
  )
}

function Image() {
  return (
    <figure className="galaxy-img h-100">
      <img
        src={img}
        alt="a video gamer focused on playing a game on the computer"
        className="h-100"
      />

    </figure>
  )
}

function RegisterContent() {
  return (
    <article
      style={{
        background: "#0D0D0D",
        color: "#F2F2F2"
      }}
      className="galaxy-register px-4 py-5">
        <div className="wrapper">
          <RegisterHeader/>
          <Form/>
        </div>
    </article>

  )
}

function RegisterHeader() {
  return (
    <section className="form-header mb-5">
      <h2 className="mb-4">Get in the Game</h2>
      <div>
        <p>
          Unlock your spot at the most epic gaming extravaganza by filling out our registration form.
        </p>
        <p>
          Get ready to level up and embark on an unforgettable adventure!
        </p>
      </div>
    </section>
  )
}

export default Register;
