import React from 'react'
import {nanoid} from 'nanoid'


const Desarrollo = () => {
  const [Nombre, setNombre] = React.useState('')
  const [Apellido, setApellido] = React.useState('')
  const [Identificacion, setIdentificacion] = React.useState('')
  const [Correo, setCorreo] = React.useState('')
  const [Telefono, setTelefono] = React.useState('')
  const [Fechanacimi, setFechanacimi] = React.useState('')
  const [Listasdatos, setListasdatos] = React.useState([])
  const [nextNombre, setnextNombre] = React.useState()
  const [id, setId] = React.useState()
  const [error, setError] = React.useState()


  const guardarDatos = (e) =>{
      e.preventDefault()
      if(!Nombre.trim()){
        setError('Digite el Nombre')
        return

      }
      if(!Apellido.trim()){
        setError('Digite el Apellido')
        return

      }
      if(!Identificacion.trim()){
        setError('Digite la N° Identificacion')
        return

      }
      if(!Correo.trim()){
        setError('Digite el Correo')
        return

      }
  
      if(!Telefono.trim()){
        setError('Ingrese el Telefono')
        return

      }
      if(!Fechanacimi.trim()){
        setError('Ingrese la Fecha')
        return

      }


      setListasdatos([
        ...Listasdatos,
        {id: nanoid(), nomN:Nombre, nomA:Apellido, nomIden:Identificacion, nomCor:Correo, nomTele:Telefono, nomFecha:Fechanacimi}
      ])

      e.target.reset()
      setNombre('')
      setApellido('')
      setIdentificacion('')
      setCorreo('')
      setTelefono('')
      setFechanacimi('')
      setError(null)

  }

      const editarDatos = item =>{
      setNombre(item.nomN)
      setApellido(item.nomA)
      setIdentificacion(item.nomIden)
      setCorreo(item.nomCor)
      setTelefono(item.nomTele)
      setFechanacimi(item.nomFecha)
      setnextNombre(true)
      setId(item.id)
      setError(null)
      }

      const acepEditar = e =>{
        e.preventDefault()

        if(!Nombre.trim()){
            setError('Digite el Nombre')
            return
    
          }
          if(!Apellido.trim()){
            setError('Digite el Apellido')
            return
    
          }
          if(!Identificacion.trim()){
            setError('Digite la N° Identificacion')
            return
    
          }
          if(!Correo.trim()){
            setError('Digite el Correo')
            return
    
          }
          if(!Correo.trim()){
            setError('Digite el Correo')
            return
    
          }
          if(!Telefono.trim()){
            setError('Ingrese el Telefono')
            return
    
          }
          if(!Fechanacimi.trim()){
            setError('Ingrese la Fecha')
            return
    
          }
    
    
        const arrayEditado = Listasdatos.map(
      item => item.id === id ? {id:id, nomN: Nombre, nomA: Apellido, nomIden: Identificacion, nomCor: Correo, nomTele: Telefono, nomFecha: Fechanacimi}:item
        )
        setListasdatos(arrayEditado)
        setNombre('')
        setApellido('')
        setIdentificacion('')
        setCorreo('')
        setTelefono('')
        setFechanacimi('')
        setnextNombre(true)
        setError(null)

      }

      

      const eliminardatos = id =>{
        const aux = Listasdatos.filter(item => item.id !== id)
        setListasdatos(aux)
      }

      const cancelar = () =>{
    
        setNombre('')
        setApellido('')
        setIdentificacion('')
        setCorreo('')
        setTelefono('')
        setFechanacimi('')
        setError(null)
      }
  
  return (
    <div className='container mt-5'>
    <h2 className= 'text-center'> INSCRIPCION EVENTOS DE ALEJOSAN</h2>
    <hr/>
    <div className='row'>
        <div className='col-8'>
            <h4 className='text-center'>Listado de Datos de la Persona</h4>
            <ul className='list-group'>
            {
          Listasdatos.map(item=>(
            <li className='list-group-item' key={item.id}>
         <spam className='lead'>{item.nomN}-{item.nomA}-{item.nomIden}-{item.nomCor}-{item.nomTele}-{item.nomFecha}</spam>
              <button className='btn btn-info btn-sm float-end mx-2' onClick={()=>eliminardatos(item.id)}> Eliminar dato
              </button>
              <button className='btn btn-secondary btn-sm float-end mx-2' onClick={()=>editarDatos(item)}> Editar dato
              </button>

            </li>

          ))
          }

            </ul>

        </div>
        <div className='col-4'>
           
       <form onSubmit ={nextNombre ? acepEditar : guardarDatos}>
         {
           error ? <spa className= 'text-danger'>{error} </spa> 
           : null

         }
          <input
          className='form-control mb-2'
          type = 'text'
          placeholder = 'Ingrese Nombre'
          onChange={(e)=> setNombre(e.target.value)}
          value={Nombre}
          />
          <input
          className='form-control mb-2'
          type = 'text'
          placeholder = 'Ingrese Apellido'
          onChange={(e)=> setApellido(e.target.value)}
          value={Apellido}
          />
          <input
          className='form-control mb-2'
          type = 'text'
          placeholder = 'Ingrese Identificacion'
          onChange={(e)=> setIdentificacion(e.target.value)}
          value={Identificacion}
          />
          <input
          className='form-control mb-2'
          type = 'email'
          id="floatingInputValue"
          placeholder="name@example.com"
          onChange={(e)=> setCorreo(e.target.value)}
          value={Correo}
          />
          <input
         className='form-control mb-2'
         type = 'text'
         placeholder = 'Ingrese Telefono'
         onChange={(e)=> setTelefono(e.target.value)}
         value={Telefono}
         />

         <input
          className='form-control mb-2'
          type = 'date'
          onChange={(e)=> setFechanacimi(e.target.value)}
          value={Fechanacimi}
          />
              <>
              <button className = 'btn btn-warning btnblock' type='submit' 
              >Editar</button>
              <button className = 'btn btn-danger btn-block mx-2' onClick={() => cancelar()}
              >Cancelar </button>
              </>
        
              <button
              className='btn btn-primary btn-block'
              type='submit'
              >Agregar</button>

        
         
     </form>
        </div>

    </div>
       
        <br/>
        

       </div>
      )
  }

export default Desarrollo