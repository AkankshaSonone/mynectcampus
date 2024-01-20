import React from "react"
import logo from './logo.png'

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container header-box'>
          <div className='logo'>
          <img
            src={logo}
            alt="img"
            className='img'
            style={{
              maxWidth: '190px',
              maxHeight: '200px',
                 
            }}
          />
          <br></br>
            <span>EDUCATION & LEARNING</span>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
