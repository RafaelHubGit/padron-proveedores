import React from 'react'

export const Header = () => {
  return (
    <div className="header">
        <div className='header-title'>
            Padrón de Proveedores
        </div>
        <div className='header-info'>
            <p className='nombre'> Nava Vargas Gonzalo Rafael </p>
            <p className='mail'> gonzalo.nava.1403@gmail.com</p>
            <a className='cerrar-sesion' href="#">Cerrar sesión</a>
        </div>
    </div>
  )
}
