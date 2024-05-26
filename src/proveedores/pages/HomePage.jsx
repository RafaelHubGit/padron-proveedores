import { useMsal } from '@azure/msal-react';
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../auth';
import { Header } from '../components/Header';
// import { CardGeneral } from '../components/CardGeneral';
// import { ProveedoresSearch } from '../components/ProveedoresSearch';
import { GeneralProvider } from '../context/General/GeneralProvider';
// import { ProveedorDetalle } from '../components/proveedor detalle/ProveedorDetalle';
import { SearchDetalleRouter } from '../../router/SearchDetalleRouter';
import { ProveedoresProvider } from '../context/Proveedores/ProveedoresProvider';



export const HomePage = () => {
  
  
  const { instance, accounts } = useMsal();
    const user = accounts.length > 0 ? accounts[0] : null;


    useEffect(() => {


        // if (user) {
        //     console.log('User name:', user.name);
        //     console.log('User email:', user.username); // Asumiendo que 'username' contiene el correo
        // } else {
        //     console.log('No user account found');
        // }
    }, [instance, accounts]);
  

  // const algo = useContext( AuthContext );

  // console.log('context : ', algo);

  // const handleLogout = () => {
  //   instance.logoutPopup({
  //     onRedirectNavigate: () => false
  //   }).then(() => {
  //     localStorage.clear();
  //   }).catch(e => {
  //     console.error(e);
  //   });
  // };

  return (
    <GeneralProvider>
      <ProveedoresProvider>
          <Header />
          <SearchDetalleRouter />
      </ProveedoresProvider>
    </GeneralProvider>
  )
}
