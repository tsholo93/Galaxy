import Hero from "../Hero/Hero";
import AboutUs from '../AboutUs/AboutUs';
import EventsMain from '../EventSchedule/Events';
import Register from '../Register/Register';
import Sponsors from '../Sponsors/Sponsors';
import ContactUs from '../ContactUs/ContactUs';

function PageContent() {
  return (
    <>
      <Hero/>
      <AboutUs/>
      <EventsMain/>
      <Register/>
      <ContactUs/>
      <Sponsors/>
    </>
  )
}

export default PageContent
