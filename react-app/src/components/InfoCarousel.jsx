import "./Info.css";

function InfoCarousel(props) {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={props.img1} className="d-block w-100" alt="first img" />
          <div className="carousel-caption">
            <p>{props.text1}</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={props.img2}
            className="d-block w-100"
            alt="second helping img"
          />
          <div className="carousel-caption">
            <p>{props.text2}</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={props.img3} className="d-block w-100" alt="third helping img" />
          <div className="carousel-caption">
            <p>{props.text3}</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default InfoCarousel;
