import img from "../assets/group-gamers.jpg"
import Banner from '../Common/Banner.js'
import AboutWelcomeNote from "./AboutWelcomeNote";

function AboutUs() {
  return (
    <section className="container-fluid p-0 m-0">
      <div className="row g-0 gy-0">
        <div className="col-md-6 col-xl-6 p-0 m-0">
          <AboutWelcomeNote/>
        </div>

        <div className="col-md-12 col-xl-3 order-last order-xl-0 p-0 ">
          <Image />
        </div>

        <div className="col-md-6 col-xl-3 p-0 m-0 order-first order-xl-0">
          <Banner
            ctnNum={22}
            ctnText={"Sessions"}
            styles={{
              background: "#F2F2F2",
              height: "100%",
            }}
          />
        </div>
      </div>
    </section>
  )
}

function Image({ className }) {
  return (
    <figure
      style={{
        overflow: "hidden",
      }}
      className="p-0 m-0 galaxy-img"
      >
      <img
        src={img}
        alt="a group of video gamers focus on playing gaming"
        style={{
          objectPosition: "80% 25%"
        }}
      />
    </figure>
  )
}


export default AboutUs
