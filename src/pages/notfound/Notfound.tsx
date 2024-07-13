import * as React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/notfound.jpg'
import './NotFound.css'

function NotFound() {
  return (
    <div className='errorWrapper'>
      <div>
        <img src={image} alt='Page not found' />
        <div className=''>
          <p>
            An error occurred, please try again later. <br />
            Click the button below to go to the home page.
          </p>
          <Link to='/'>
            <button>Home page</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default NotFound
