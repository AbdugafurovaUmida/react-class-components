import Link from 'next/link'

function NotFound() {
  return (
    <div className='notfound-page' data-testid='notfound-page'>
      <h2>Page is not found</h2>
      <img src='/images/notfound.jpg' alt='thanos hand' />
      <Link href='/'>Back to home page</Link>
    </div>
  )
}

export default NotFound
