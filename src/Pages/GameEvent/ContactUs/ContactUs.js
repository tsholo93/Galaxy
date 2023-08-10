import ContactDetails from "./ContactDetails";
import img from "../assets/two-gamers.jpg";

import PageImage from "../Common/PageImage";
import AccommodationDetails from "./AccommodationDetails";

import "../styles/layout.css";

function ContactUs() {
  return (
    <section className="container-fluid p-0 m-0">
      <div className="row g-0">
        <div className="col-md-12 col-xl-6 p-0 order-md-last order-xl-0">
            <ContactDetails/>
        </div>

        <div className="col-md-6 col-xl-3 p-0">
          <PageImage
            img={{
              url: img,
              alt: "two video gamers smiling while stiring at a shared computer"
            }}
          />
        </div>

        <div className="col-md-6 col-xl-3 p-0">
          <AccommodationDetails />
        </div>
      </div>
    </section>

  )
}

export default ContactUs
