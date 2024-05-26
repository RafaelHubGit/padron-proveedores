import React, { useContext, useEffect, useState } from 'react'
import useDivHeight from '../hooks/useDivHeight';
import { GeneralContext } from '../context/General/GeneralContext';
import { useMsal } from '@azure/msal-react';

export const Header = () => {

  const { instance, accounts } = useMsal(); 

  const user = accounts[0];
  // const userName = user?.name;
  // const userEmail = user?.username;

  // console.log("el usuario : ", user);

  const [headerHeightRef, headerHeight] = useDivHeight();
  const { setHeight } = useContext( GeneralContext );
  const [usuario, setUsuario] = useState({
    email: '',
    nombre: ''
  })


  
  useEffect(() => {
    const user = accounts[0];
    const userName = user?.name;
    const userEmail = user?.username;

    // console.log( "USUARIO  :_ ", accounts );

    setUsuario({
      email: userEmail,
      nombre: userName
    })
    
  }, [accounts])

   const handleLogout = () => {
    instance.logoutPopup({
      onRedirectNavigate: () => false
    }).then(() => {
      localStorage.clear();
    }).catch(e => {
      console.error(e);
    });
  };
  


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
            <p className='nombre'>{ usuario.nombre } </p>
            <p className='mail'>  {usuario.email} </p>
            <a className='cerrar-sesion' href="#" onClick={handleLogout}>Cerrar sesión</a>
        </div>
      </div>
    </div>
  )
}
