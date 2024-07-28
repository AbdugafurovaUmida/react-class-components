import { Link } from 'react-router-dom'
import image from '../../assets/notfound.jpg'

function NotFound() {
  return (
    <div data-testid='notfound-page'>
      <h2>Page is not found</h2>
      <img src={image} alt='thanos hand' />
      <Link to='/'>Back to home page</Link>
    </div>
  )
}

export default NotFound
