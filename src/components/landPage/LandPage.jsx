import React from 'react'
import './LandPage.css'

const LandPage = () => {
  return (
    <div className='landPage'>
    <div className='land'>
      <div style={{marginLeft:"60px"}}>
        <img style={{marginTop:"55px",width:"140px"}} src="https://abgo.in/bloom/image/logo.png" alt="" />
      </div>
      <div className='land-button'>
        <button>Sign In</button>
        <button>SignUp</button>
        <img src="https://abgo.in/bloom/image/cart.png" alt="" />
      </div>
    </div>
    <h1>BOOK YOUR SERVICES ONLINE</h1>
    <p>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br /> Standard dummy text ever since the 1500s,  </p>
    <p>RAFNAS PP</p>
    </div>
  )
}

export default LandPage