import React, { useEffect } from 'react'
import { CardGeneral } from './CardGeneral'

export const InactivoInfoContainer = ({ initialValue = {} }) => {

  useEffect(() => {
    console.log("initialValue : ", initialValue);
  }, [initialValue])
  

  return (
    <div className='container '>
        <CardGeneral
                title="Inactivo"
                className='cardGeneral-red'
        >
          <div className='row inactivoInfo-wrap'>
            <div className='col-12 mb-4 estado-proveedor'>
              { initialValue?.estado_proveedor }
            </div>
            <div className='col-12 row mb-4 fechas-container'>
              <div className='col-12 col-sm-4 col-md-4  d-flex flex-row fechas-wrap'>  <p className='fecha-text'> Fecha Inicio : </p> <p className='fecha-data'>{ initialValue?.fecha_inicio } </p> </div>
              <div className='col-12 col-sm-4 col-md-4  d-flex flex-row fechas-wrap'>  <p className='fecha-text'> Fecha Fin : </p>    <p className='fecha-data'>{ initialValue?.fecha_fin } </p> </div>
              {
                initialValue?.fecha_diario_oficial_federacion ? 
                (
                  <div className='col-12 col-sm-12 col-md-4 d-flex flex-row fechas-wrap'>  <p className='fecha-text'> Fecha DOF : </p>    <p className='fecha-data'>{ initialValue?.fecha_diario_oficial_federacion } </p> </div>
                ) : ""
              }
            </div>
            <div className='observaciones'>
              { initialValue?.observacion }
            </div>
          </div>
        </CardGeneral>
    </div>
  )
}
