const FormControl = (props) => {
  const { label, type, name, placeholder } = props
  return (
    <div>
      <label>{label}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  )
}
export default FormControl
