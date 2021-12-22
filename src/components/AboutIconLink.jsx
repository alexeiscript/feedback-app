import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
      <Link to='/about'>
        <h2>About This App</h2>
      </Link>
    </div>
  )
}

export default AboutIconLink
