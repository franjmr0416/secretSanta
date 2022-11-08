import FormControl from '../components/FormControl'
import Btn from '../components/Btn'

const Form = () => {
  return (
    <div>
      <h2>Registra tus amigos</h2>
      <div>
        <form>
          <div>
            <span>Información de tu fiesta</span>
            <div>
              <FormControl type={'date'} label={'Fecha'} name={'fecha'} />
              <FormControl
                type={'text'}
                label={'Lugar'}
                name={'lugar'}
                placeholder={'Casa, Oficina, etc...'}
              />
              <FormControl
                type={'number'}
                label={'Monto'}
                name={'monto'}
                placeholder={'$'}
              />
            </div>
          </div>
          <div>
            <span>Datos organizador</span>
            <div>
              <FormControl
                type={'text'}
                name={'nombre_organizador'}
                label={'Nombre'}
                placeholder={'Santa'}
              />
              <FormControl
                type={'email'}
                name={'email_organizador'}
                label={'Email'}
                placeholder={'ejemplo@correo.com'}
              />
            </div>
            <span>El organizador tambien es considerado un participante</span>
          </div>
          <div>
            <div>
              <span>Participantes</span>
              <Btn action={'add'} text={'Nuevo'} />
            </div>
            <div>
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
              <Btn action={'delete'} text={'Eliminar'} />
            </div>
          </div>
          <button type='submit'>Crear</button>
        </form>
      </div>
    </div>
  )
}
export default Form
