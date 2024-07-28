import { Link } from 'react-router-dom'

function ErrorElement() {
  return (
    <div data-testid='error-element'>
      <h1>Wow, something went wrong...</h1>
      <div />
      <Link to='/'>Back to home page</Link>
    </div>
  )
}

export default ErrorElement
