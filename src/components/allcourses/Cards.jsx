import React from 'react'
import './Cards.css'
// import { coursesCard2 } from '../../dummydata'
import Card from './Card'

const Cards = ({ course, setShowPopup }) => {
  return (

    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="cards-wrapper coursesCard">
            <div className="grid2">
              {course?.slice(0, 3)?.map((val) => (
                <Card val={val} />
              ))}
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="cards-wrapper coursesCard">
            <div className="grid2">
              {course?.slice(3, 6)?.map((val) => (
                <Card val={val} setShowPopup={setShowPopup} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

  )
}

export default Cards
