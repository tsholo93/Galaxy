import "../styles/Background.css";
import "../../Common/styles/Button.css";

function WelcomeNote() {
  return (
    <section className="px-4 px-lg-5 py-5 background-black d-flex flex-column justify-content-center align-items-start justify-content-xl-start align-items-xl-start galaxy-vh80">
      <h2 className="mb-4">
        Ready, Set, Game <br/>
        Check out the schedule
      </h2>

        <div>

          <p>
          We are thrilled to present an action-packed schedule that will cater to all gaming enthusiasts.
          </p>

          <p>
          Brace yourself for an electrifying lineup of esports tournaments, engaging panel discussions with industry experts, exciting game reveals, and immersive virtual experiences.
          </p>

          <p>
            <strong>Get ready to level up your gaming experience like never before!</strong>
          </p>
      </div>
      <div>
        <a href="#0" className="btn galaxy-button black">Download</a>
      </div>
    </section>
  )
}

export default WelcomeNote
