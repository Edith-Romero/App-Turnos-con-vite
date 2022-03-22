// rfce para crear la estructura basica del componente
// Funtion Declaration
// import React from 'react'

// function Formulario() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Formulario
// Funtion Expresion
// rafce tambien: crea la estructura pero con una aroow funtion
import {useState,useEffect} from 'react'
import Error from './Error';

function Formulario({pacientes,setPacientes,paciente,setPaciente}) {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error,setError] = useState(false);

    // console.log(paciente)
    // Com Objecto.keys puedo comprobar que tiene un objeto si esta vacio o no...
  useEffect(()=>{
    if(Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  },[paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const data = Date.now().toString(36)

    return random + data

  }

  const handleSubmit = (e)=>{
    e.preventDefault()
  
    // Validacion del formulario
    if([ nombre, propietario,email,fecha,sintomas ].includes('') ){

      setError(true)
      return;

    }else

    setError(false)

    // Objeto de pacientes
    const objetoPaciente = {
      nombre, 
      propietario,
      email,
      fecha,
      sintomas
    }

    if(paciente.id){
      // Editando el registro
      objetoPaciente.id = paciente.id

      const pacientesActualizados = pacientes.map(pacienteState=> pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})

    }else{
      // Nuevo Registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    // Reiniciar el Formulario
    setNombre(''), 
    setPropietario(''),
    setEmail(''),
    setFecha(''),
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Segumientos de Pacientes</h2>

      <p className="text-lg mt-5 text-center">
        Anade Pacientes y {''}
        <span className="text-indigo-600 font-bold">
          Administralos
        </span>
        </p>
        <form 
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
          {/* shadow es la sombra el rounded es el borde redondo py es arriba y abajo px derec e izq */}
          {/* {error && "Todos los campos son obligatorios"} ****Puedo hacerlo asi */}
          {error && <Error><p>"Todos los campos son obligatorios"</p></Error>} 
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
            {/* El htmlFor al darl clic en mascota me habilite el input */}
            <input
              id="mascota"
              type="text"
              placeholder="Nombre de la Mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={nombre}
              onChange={(e)=>setNombre(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre del Propietario</label>
            {/* El htmlFor al darl click en mascota me habilite el input */}
            <input
              id="propietario"
              type="text"
              placeholder="Nombre del Propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={propietario}
              onChange={(e)=>setPropietario(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
            {/* El htmlFor al darl click en mascota me habilite el input */}
            <input
              id="email"
              type="email"
              placeholder="Email contacto propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
            {/* El htmlFor al darl click en mascota me habilite el input */}
            <input
              id="alta"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={fecha}
              onChange={(e)=>setFecha(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Motivo de la consulta</label>
            {/* El htmlFor al darl click en mascota me habilite el input */}
            <textarea
              id="sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describa los sintomas"
              value={sintomas}
              onChange={(e)=>setSintomas(e.target.value)}
            />
          </div>
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors"
            value={paciente.id ? 'Editar paciente' : 'Agregar Paciente'}
          />
        </form>
    </div>
  )
}

export default Formulario;
