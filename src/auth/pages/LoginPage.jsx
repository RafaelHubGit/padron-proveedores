
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { loginRequest } from '../config/authConfig';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';

export const LoginPage = () => {


  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();


  useEffect(() => {
    // Si el usuario está autenticado, redirige a la página de inicio
    if (isAuthenticated) {
      // navigate('/home');
    }
  }, [isAuthenticated]);


  // const handleLogin = async () => {

  //   try {
  //     await instance.loginRedirect(loginRequest);
  //   } catch (error) {
  //     console.error(e);
  //   }

  // };

  const handleLogin = () => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.error(e);
    });
  };

  return (
    <div className='containerLoginPage'>
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  )
}
