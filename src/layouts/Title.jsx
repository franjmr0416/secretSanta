import './Title.css'
import { FaGift } from 'react-icons/fa'

const Title = () => {
  return (
    <div className='box'>
      <FaGift className='icon' />
      <span className='title'>Secret Santa</span>
    </div>
  )
}
export default Title
