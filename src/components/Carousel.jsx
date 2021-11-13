import React from 'react'
import zed1 from '../../src/images/zed1.jpg'
import zed2 from '../../src/images/zed2.jpg'
import zed3 from '../../src/images/zed3.jpg'

function Carousel() {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={zed1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={zed2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={zed3} className="d-block w-100" alt="..." />
    </div>
  </div>
</div>
    )
}

export default Carousel
