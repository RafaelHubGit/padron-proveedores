import React, { useContext, useEffect } from 'react'
import useDivHeight from '../hooks/useDivHeight';
import { GeneralContext } from '../context/GeneralContext';

export const Header = () => {

  const [headerHeightRef, headerHeight] = useDivHeight();
  const { setHeight } = useContext( GeneralContext );


  useEffect(() => {
    setHeight( 'header', headerHeight );
  }, [headerHeight])

  return (
    <div ref={headerHeightRef} className="header ">
      <div className="container-lg wrapped">
        <div className='header-title'>
            Padrón de Proveedores
        </div>
        <div className='header-info'>
            <p className='nombre'> Nava Vargas Gonzalo Rafael </p>
            <p className='mail'> gonzalo.nava.1403@gmail.com</p>
            <a className='cerrar-sesion' href="#">Cerrar sesión</a>
        </div>
      </div>
    </div>
  )
}
