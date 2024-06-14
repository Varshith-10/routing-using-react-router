import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <navbar className="topCont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="image1"
        alt="wave"
      />
      <ul className="rightCont">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </navbar>
  )
}

export default Header
