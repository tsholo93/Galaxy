import IconDetails from "../Data/IconDetails";
import CompanyBrandInfo from "../../CompanyDetails/CompanyBrandInfo";

function ContactDetails() {
  return (
    <section style={{
      background: "#201D73",
      color: "#F2F2F2",
      height: "100%",
    }}
    className="px-4 px-lg-5 py-5 d-flex flex-column justify-content-center align-items-start"
    >
      <header>
        <h2>
          Reach Out for Any Event Inquiries and Support
        </h2>
      </header>
      <div>
        <p>
          We'd love to hear from you! Whether you have a burning question, need assistance, or simply want to share your gaming experiences, our team is ready to connect with you.
        </p>
        <p>
         We're here to provide support, engage with the gaming community, and make your gaming adventure as incredible as possible.
        </p>
        <div className="container-fluid py-3 px-0 m-0">
          <div className="row">
            <section className="col-12 col-sm-6 col-md-5 col-lg-3 col-xl-5 d-flex flex-column justify-content-center align-items-center justify-content-sm-start align-items-sm-start mb-4">
              <h3 className="mb-3">Galaxy Headquarters:</h3>
              <p className="m-0">{CompanyBrandInfo.contact.address.street},</p>
              <p className="m-0">{CompanyBrandInfo.contact.address.city},</p>
              <p className="m-0">{CompanyBrandInfo.contact.address.postal},</p>
              <p>{CompanyBrandInfo.contact.address.country},</p>
            </section>
            <section className="col-12 col-sm-6 col-md-5 col-lg-3 col-xl-5 d-flex flex-column justify-content-center align-items-center justify-content-sm-start align-items-sm-start mb-4">
              <h3 className="mb-3">Connect with us</h3>
              <p className="p-0 m-0">
                <span>Email:</span> &nbsp;
                {CompanyBrandInfo.contact.eMail}
              </p>
              <p>
                <span>Call:</span> &nbsp;
                {CompanyBrandInfo.contact.phoneNumber}
              </p>
            </section>
            </div>
        </div>
      </div>
      <Pageicons
        iconList={IconDetails}
      />
    </section>
  )
}

function Pageicons({iconList}) {
  const icons = iconList.map(
    icon => (
      <a
        key={icon.id}
        href={icon.url}
        className="d-block mx-2">
        <img
          src={icon.source}
          alt={icon.alt}
          style={{
            maxWidth: "100%",
            width: "30px"
          }}
        />
      </a>
    ))

  return (
    <div className="d-flex justify-content-center align-items-center w-50 mx-auto">
      {icons}
    </div>
  )
}

export default ContactDetails
