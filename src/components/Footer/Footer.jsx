import React from 'react'
import './footer.scss'

function Footer() {
  return (
      <div className='footer'>
          <div className='top'>
              <div className='item'>
                  <h1>Categories</h1>
                  <span>Women</span>
                  <span>Men</span>
                  <span>Shoes</span>
                  <span>Accessories</span>
                  <span>New Arrivals</span>
              </div>

              <div className='item'>
                  <h1>Links</h1>
                  <span>FAQ</span>
                  <span>Pages</span>
                  <span>Stores</span>
                  <span>Compare</span>
                  <span>Cookies</span>
              </div>

              <div className='item'>
                  <h1>About</h1>
                  <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      
                  </span>
              </div>

              <div className='item'>
                  <h1>Contact</h1>
                  <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    
                  </span>
              </div>
          </div>

          <div className='bottom'>
            <div className='left'>
              <div className='logo'>PRADA</div>
              <span className='copyright'>
              © Copyright 2023. All Rights Reserved
              </span>
            </div>

            <div className='right'>
            <img src='\images\payment.png' alt='' />

            </div>
          </div>
      </div>
  )
}

export default Footer
