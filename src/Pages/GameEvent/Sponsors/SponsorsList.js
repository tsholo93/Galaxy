import "../styles/Background.css";
import "../styles/layout.css";

function SponsorsList({list}) {
  const listItems = list.map(
    item => (
      <div key={item.id} className="col-4 col-sm-3 col-md-2 col-xl-3">
        <li style={{
          height: "auto",
        }}>
          <img
            src={item.url}
            alt={item.alt}
            style={{
              width: "120px"
            }}
            className="d-block"
          />
        </li>
      </div>
    ))
  return (
    <ul
    className="py-5 px-4 px-lg-5 list-unstyled m-0 background-black container-fluid galaxy-short-content">
      <div className="row gy-4 gx-1">
        {listItems}
      </div>
    </ul>
  )
}

export default SponsorsList
