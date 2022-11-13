import FormControl from './FormControl'
import Btn from './Btn'

const FormParticipante = (props) => {
  return (
    <div className='participante'>
      <div className='grid-2 mt-05'>
        <FormControl
          type={'text'}
          name={''}
          label={'Nombre'}
          placeholder={'Santa'}
        />
        <FormControl
          type={'email'}
          name={''}
          label={'Email'}
          placeholder={'ejemplo@correo.com'}
        />
      </div>

      <Btn action={'delete'} text={'Eliminar'} />
    </div>
  )
}
export default FormParticipante
