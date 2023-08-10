//import "./style.css";
import img from "../assets/gamers-fist-bump-after-winning-game.jpg";

import SponsorsData from "../Data/SponsorsData";
import PageImage from "../Common/PageImage";
import ThankYouNote from "./ThankYouNote";
import SponsorsList from "./SponsorsList";


function Sponsors() {
  return (
    <section className="container-fluid p-0 m-0">
      <div className="row g-0">
        <div className="col-md-6 col-xl-3 p-0 m-0">
          <ThankYouNote/>
        </div>

        <div className="col-md-6 col-xl-3 p-0 m-0 order-first order-xl-0">
          <PageImage
            img={{
              url: img,
              alt: "two gamers fist bump"
            }}
          />
        </div>

        <div className="col-md-12 col-xl-6 p-0 m-0">
          <SponsorsList list={SponsorsData}/>
        </div>
      </div>
    </section>
  )
}


export default Sponsors
