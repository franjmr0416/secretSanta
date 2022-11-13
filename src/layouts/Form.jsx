import FormControl from '../components/FormControl'
import Btn from '../components/Btn'
import './Form.css'
import { useState } from 'react'
import FormParticipante from '../components/FormParticipante'

const Form = () => {
  const initialParticipantes = [{ nombre: '', email: '' }]
  const [participantes, setParticipantes] = useState(initialParticipantes)
  const addParticipante = () => {
    setParticipantes((participantes) => [
      ...participantes,
      { nombre: '', email: '' },
    ])
  }

  return (
    <div className='form-content'>
      <h2>Registra tus amigos</h2>
      <div>
        <form>
          <div>
            <span className='section-title'>Información de tu fiesta</span>
            <div className='grid-3 mt-05'>
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
          <div className='section'>
            <span className='section-title'>Datos organizador</span>
            <div className='grid-2 mt-05'>
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
          <div className='section'>
            <div className='flex content-between'>
              <span className='section-title'>Participantes</span>
              <Btn action={'add'} text={'Nuevo'} onClick={addParticipante} />
            </div>
            <div>
              {participantes.map((x) => {
                return <FormParticipante />
              })}
            </div>
          </div>
          <div className='flex content-center section '>
            <button className='btn-submit' type='submit'>
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Form
