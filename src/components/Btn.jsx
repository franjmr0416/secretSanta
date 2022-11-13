import { FaPlus } from 'react-icons/fa'
import './Btn.css'

const Btn = (props) => {
  const { text, action, ...rest } = props
  return (
    <button
      className={`btn ${action == 'add' ? 'add-btn' : ''} ${
        action == 'delete' ? 'delete-btn' : ''
      }`}
      type='button'
      {...rest}
    >
      {text}
    </button>
  )
}
export default Btn
