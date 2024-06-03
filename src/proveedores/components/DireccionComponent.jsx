import React from 'react'

export const DireccionComponent = ({ direccion = {} }) => {
  return (
    <div>
      <div className="form-floating mb-3">
        <textarea 
          className="form-control" 
          placeholder="Calle" 
          id="CalleTextareaId"
          value={ direccion?.calle }
        >
        </textarea>
        <label htmlFor="CalleTextareaId">Calle</label>
      </div>
      <div className='row'>
        {/* <div> */}
          <div className="form-floating mb-3 col-md-6">
            <input 
              type="text" 
              className="form-control" 
              id="coloniaInputId" 
              placeholder="colonia" 
              value={ direccion?.colonia }
            />
            <label htmlFor="coloniaInputId">Colonia</label>
          </div>
          <div className="form-floating mb-3 col-md-6">
            <input 
              type="text" 
              className="form-control" 
              id="cpInputId" 
              placeholder="C.P." 
              value={ direccion?.codigo_postal }
            />
            <label htmlFor="cpInputId">C.P.</label>
          </div>
        {/* </div> */}
      </div>
      <div className='row'>
        <div className="form-floating mb-3 col-md-6">
          <input 
            type="text" 
            className="form-control" 
            id="estadoInputId" 
            placeholder="Estado" 
            value={ direccion?.estado }
          />
          <label htmlFor="estadoInputId">Estado</label>
        </div>
        <div className="form-floating mb-3 col-md-6">
          <input 
            type="text" 
            className="form-control" 
            id="entidadInputId" 
            placeholder="Entidad"
            value={ direccion?.entidad_local }
          />
          <label htmlFor="entidadInputId">Entidad</label>
        </div>
      </div>


    </div>
  )
}
