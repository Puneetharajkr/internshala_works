import './index.css'

const AnimationsSection = () => {
  return (
    <section className="animations-section" id="games">
      <h1>Our Cool Games</h1>
      <div className="carousel">
        <div className="carousel-item ">
          <video
            src="https://videos.pexels.com/video-files/7046607/7046607-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
            controls
            autoPlay
            loop
            muted
            className="video-item"
          ></video>
        </div>
        <div className="carousel-item">
          <video
            src="https://videos.pexels.com/video-files/6498514/6498514-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
            controls
            autoPlay
            loop
            muted
            className="video-item"
          ></video>
        </div>
        <div className="carousel-item">
          <video
            src="https://playarena.in/wp-content/uploads/2024/08/pixel-10sec-2.mp4"
            type="video/mp4"
            controls
            autoPlay
            loop
            muted
            className="video-item"
          ></video>
        </div>
        <div className="carousel-item">
          <video
            src="https://playarena.in/wp-content/uploads/2024/08/union-10sec.mp4"
            type="video/mp4"
            controls
            autoPlay
            loop
            muted
            className="video-item hover-effect"
          ></video>
        </div>
        <div className="carousel-item">
          <video
            src="https://playarena.in/wp-content/uploads/2024/08/studio-10sec-1.mp4"
            type="video/mp4"
            controls
            autoPlay
            loop
            muted
            className="video-item hover-effect"
          ></video>
        </div>
        <div className="carousel-item">
          <video
            src="https://playarena.in/wp-content/uploads/2024/08/pixel-10sec-2.mp4"
            type="video/mp4"
            controls
            autoPlay
            loop
            muted
            className="video-item hover-effect"
          ></video>
        </div>
      </div>
    </section>
  )
}
export default AnimationsSection
