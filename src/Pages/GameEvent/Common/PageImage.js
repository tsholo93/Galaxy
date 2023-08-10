import "../styles/layout.css";

function PageImage({ img }) {
  return (
    <figure className="galaxy-img h-100">
      <img
        src={img.url}
        alt={img.alt}
        className="h-100"
      />
    </figure>
  )
}

export default PageImage
