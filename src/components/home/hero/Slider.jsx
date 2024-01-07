import React from 'react'
import slider1 from './slider.jpg'
import './Slider.css'
import slider2 from './first1.png';
import slider3 from './second.png';
import Heading from "../../common/heading/Heading"
const Slider = () => {
  return (
    <div className='slider'> 
    <div id="carouselExampleIndicators" class="carousel slider-div slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item slider-item active">
      <img src={slider1} class="d-block w-100" alt="..."/>
      <div className='container carousel-text slider-text'>
          <div className='row'>
            <Heading subtitle='WELCOME TO ACADEMIA' title='Best Option for Your Education' />
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
    </div>
    <div class="carousel-item slider-item">
      <img src={slider2} class="d-block w-100" alt="..."/>
      <div className='container carousel-text slider-text'>
          <div className='row'>
            <Heading subtitle='WELCOME TO ACADEMIA' title='Best up Skilling Education Program' />
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      
    </div>
    <div class="carousel-item slider-item">
      <img src={slider3} class="d-block w-100" alt="..."/>
      <div className='container carousel-text slider-text'>
          <div className='row'>
            <Heading subtitle='WELCOME TO ACADEMIA' title='Best Regular Education Program' />
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
  )
}

export default Slider