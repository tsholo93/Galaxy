import './Banner.css'

function Banner({ ctnNum, ctnText, styles }) {
  return (
    <section className="banner h-100" style={styles}>
      <h2>
        <span className="span1">{ctnNum}</span>
        <br/>
        {ctnText}
      </h2>
    </section>
  )
}

export default Banner
