import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Get to Know Us */}
        <div className="footer-section">
          <h5 className="footer-title">Get to Know Us</h5>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Science</li>
          </ul>
        </div>

        {/* Make Money with Us */}
        <div className="footer-section">
          <h5 className="footer-title">Make Money with Us</h5>
          <ul>
            <li>Sell products on Amazon</li>
            <li>Sell on Amazon Business</li>
            <li>Sell apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
            <li>Host an Amazon Hub</li>
            <li className="footer-link">See More Make Money with Us</li>
          </ul>
        </div>

        {/* Amazon Payment Products */}
        <div className="footer-section">
          <h5 className="footer-title">Amazon Payment Products</h5>
          <ul>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li className="footer-link">Amazon Currency Converter</li>
          </ul>
        </div>

        {/* Let Us Help You */}
        <div className="footer-section">
          <h5 className="footer-title">Let Us Help You</h5>
          <ul>
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
            <li>Returns & Replacements</li>
            <li>Manage Your Content and Devices</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      
      {/* Bottom section */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-logo">amazon</div>
            <div className='credit'> <a href="https://www.linkedin.com/in/aliabdurehman/" target='blank'>Designed with ❤ by Ali Abdurehman</a></div>
            <div> English</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer