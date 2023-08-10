import './Events.css'
import "../styles/layout.css";
import img from '../assets/focus-gamer.jpg'

import WelcomeNote from "./WelcomeNote";
import PageImage from "../Common/PageImage";
import {fridayEvents, fridayEventInfo} from "../Data/FridayEventSchedule";
import {saturdayEvents, saturdayEventInfo} from "../Data/SaturdayEventSchedule";

function EventItem({ name, time, description }) {
  return (
    <>
      <p className="event-time">{time}</p>
      <h3>{name}</h3>
      <p>{description}</p>
    </>
  )
}


function EventList({ events, classname }) {
  const listItems = events.map(
    evt => (
      <li key={evt.id} className={`event-item ${classname}`}>
        <EventItem
          name={evt.name}
          time={evt.time}
          description={evt.description}
        />
      </li>
    )
  )
  return (
    <ul className="event-list">
      {listItems}
    </ul>
  )
}


function Events({ date, events, styleType }) {
  let styles = (styleType == 0) ? 'dark' : 'light';
  return (
    <section className={`events ${styles}`} style={{height: "100%"}}>
      <h2>{date}</h2>
      <EventList events={events} classname={styles}/>
    </section>
  )
}

function EventsMain() {
  return (
    <section className="events-main galaxy-vh80">
      <div className="row g-0">
        <div className="col-md-6 col-xl-3 p-0">
          <PageImage
            img={{
              url: img,
              alt: "a video gamer focused on playing a games"
            }}
          />
        </div>
        <div className="col-md-6 col-xl-3 order-first order-xl-0 p-0">
          <WelcomeNote/>
        </div>
        <div className="col-md-6 col-xl-3 p-0">
          <Events
            date={fridayEventInfo.date}
            events={fridayEvents}
            styleType={1}
          />
        </div>
        <div className="col-md-6 col-xl-3 p-0">
          <Events
            date={saturdayEventInfo.date}
            events={saturdayEvents}
            styleType={0}
          />
        </div>
      </div>
    </section>
  )
}

export default EventsMain
