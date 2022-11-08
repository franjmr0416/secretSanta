const Btn = (props) => {
  const { text, action } = props
  return (
    <button
      className={`btn ${action == 'add' ? 'add-btn' : ''} ${
        action == 'delete' ? 'delete-btn' : ''
      }`}
    >
      {text}
    </button>
  )
}
export default Btn
