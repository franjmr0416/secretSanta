import { Link } from 'react-router-dom'
import PageContent from '../layouts/PageContent'
import Title from '../layouts/Title'
import './Home.css'

const Home = () => {
  return (
    <PageContent>
      <Title />
      <div className='box-mensaje'>
        <h1 className='mensaje'>Crea tus intercambios secretos para Navidad</h1>
      </div>
      <div className='imgContainer'>
        <img className='img' alt='gift image' src='/Two_hands_with_gift.png' />
      </div>
      <div className='btn-box'>
        <Link to={'/registro'}>
          <button className='btn-crear'>Comenzar</button>
        </Link>
      </div>
      <div className='div-flake'>
        <img className='img-flake' src='/snowflake.png' />
      </div>
      <div className='div-flake-2'>
        <img className='img-flake' src='/snowflake.png' />
      </div>
      <div className='div-ball'>
        <img className='img-ball' src='/christmas_ball.png' />
      </div>
      <div className='div-leaf'>
        <img className='img-leaf' src='/leaf_angle.png' />
      </div>
    </PageContent>
  )
}
export default Home
