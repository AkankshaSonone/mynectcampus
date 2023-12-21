import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import Slider from "./Slider"
 
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise' />
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='button'>
              <button className='primary-btn' >
              
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button >
              <Link to="/courses">
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </Link>
                
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
      <Slider/>
    </>
  )
}

export default Hero
