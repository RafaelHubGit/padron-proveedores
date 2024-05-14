import { useMsal } from '@azure/msal-react';
import React, { useContext } from 'react'
import { AuthContext } from '../../auth';
import { Header } from '../components/Header';
import { CardGeneral } from '../components/CardGeneral';
import { ProveedoresSearch } from '../components/ProveedoresSearch';



export const HomePage = () => {
  
  const { instance, accounts } = useMsal(); 

  const user = accounts[0];
  const userName = user?.name;
  const userEmail = user?.username;

  const algo = useContext( AuthContext );

  console.log('context : ', algo);

  const handleLogout = () => {
    instance.logoutPopup({
      onRedirectNavigate: () => false
    }).then(() => {
      localStorage.clear();
    }).catch(e => {
      console.error(e);
    });
  };

  return (
    <>
      {/* home page 
      <p>Nombre de Usuario: {userName}</p>
      <p>Email: {userEmail}</p>
      <button onClick={handleLogout}>Cerrar Sesión</button> */}
      <Header />

      <CardGeneral className="container-md mt-4 cardGeneral ">
        <ProveedoresSearch />
      </CardGeneral>
    
    </>
  )
}
