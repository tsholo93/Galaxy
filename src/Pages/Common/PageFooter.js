import facebookIcon from "../GameEvent/assets/icons/facebook-icon.png";
import twitterIcon from "../GameEvent/assets/icons/twitter-icon.png";
import instagramIcon from "../GameEvent/assets/icons/instagram-icon.png";

function PageFooter() {
  return (
    <footer
      style={{
        background: "#0D0D0D",
        color: "#F2F2F2",
        borderTop: "1px solid grey"
      }}
      className="p-5"
    >
      <div className="row">
        <p className="col-12 col-md-4 text-center text-capitalize">
          <small>&copy; Galaxy.All rights reserved</small>
        </p>
        <p className="text-center text-capitalize col-12 col-md-4">
          <small>Images/Icons are from <a>Pexels</a> & <a>Icon8</a></small>
        </p>
        <div className="col-12 col-md-4 text-center">
          <a
            href="#0"
            className="d-inline-block mx-auto px-2"
          >
            <img
              src={facebookIcon}
              alt="facebokk icon"
              style={{
                maxWidth: "25px"
              }}
              className="d-inline-block"
            />
          </a>
          <a
            href="#0"
            className="d-inline-block mx-auto px-2"
          >
            <img
              src={twitterIcon}
              alt="twitter icon"
              style={{
                maxWidth: "25px"
              }}
              className="d-inline-block"
            />
          </a>
          <a
            href="#0"
            className="d-inline-block mx-auto px-2"
          >
            <img
              src={instagramIcon}
              alt="instagram icon"
              style={{
                maxWidth: "25px"
              }}
              className="d-inline-block"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default PageFooter
