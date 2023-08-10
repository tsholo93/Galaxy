import "../../Common/styles/Button.css";
import "../styles/Background.css";
import "../styles/layout.css";

function AboutWelcomeNote() {
  return (
    <article
      className="container-fluid px-4 px-md-5 py-5 d-flex flex-column justify-content-center align-items-start background-dark galaxy-vh80"
    >
      <h2 className="mb-4">
        Get Ready for an Epic Weekend
      </h2>

      <div className="mb-3">
        <p>
        Welcome to the most anticipated gaming event of the year!
        </p>

        <p>
        This event brings together gaming enthusiasts from around the globe to celebrate the incredible artistry and innovation of the gaming industry.
        </p>

        <p>
        With a diverse range of games and activities, this event promises an unforgettable experience for gamers of all ages and interests.
        </p>

        <p>
          <strong>So mark your calendars, grab your controllers, and prepare to level up your gaming journey at this epic gaming event!</strong>
        </p>
      </div>
      <div>
        <a href="#0" className="btn galaxy-button purple">Register Now!</a>
      </div>
    </article>
  )
}

export default AboutWelcomeNote;
