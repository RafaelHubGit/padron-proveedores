import React from 'react'

export const DireccionComponent = () => {
  return (
    <div>

      <div class="form-floating mb-3">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label for="floatingTextarea">Calle</label>
      </div>
      <div className='row'>
        {/* <div> */}
          <div className="form-floating mb-3 col-md-6">
            <input type="text" className="form-control" id="floatingInput" placeholder="colonia" />
            <label htmlFor="floatingInput">Colonia</label>
          </div>
          <div className="form-floating mb-3 col-md-6">
            <input type="text" className="form-control" id="floatingInput" placeholder="C.P." />
            <label htmlFor="floatingInput">C.P.</label>
          </div>
        {/* </div> */}
      </div>
      <div className='row'>
        <div className="form-floating mb-3 col-md-6">
          <input type="text" className="form-control" id="floatingInput" placeholder="Estado" />
          <label htmlFor="floatingInput">Estado</label>
        </div>
        <div className="form-floating mb-3 col-md-6">
          <input type="text" className="form-control" id="floatingInput" placeholder="Entidad" />
          <label htmlFor="floatingInput">Entidad</label>
        </div>
      </div>


    </div>
  )
}
