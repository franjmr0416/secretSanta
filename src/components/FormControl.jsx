import './FormControl.css'

const FormControl = (props) => {
  const { label, type, name, placeholder } = props
  return (
    <div className='box-control'>
      <label className='label'>{label}</label>
      <input
        className='input'
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  )
}
export default FormControl
