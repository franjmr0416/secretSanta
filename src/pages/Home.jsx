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
        <img
          className='img'
          alt='gift image'
          src='/public/Two_hands_with_gift.png'
        />
      </div>
    </PageContent>
  )
}
export default Home
