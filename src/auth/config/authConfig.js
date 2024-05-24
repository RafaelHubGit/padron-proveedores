

// Configuración de MSAL
export const msalConfig = {
    auth: {
      clientId: '386cefb2-6839-4149-870a-e6b056b42794', // Reemplaza con tu Client ID de la aplicación de Azure AD
      authority: 'https://login.microsoftonline.com/ec98a3f2-ab05-4f1a-a1a7-9f2cba375ebb', // Reemplaza con tu Tenant ID
      redirectUri: 'http://localhost:5173/home', // Asegúrate de que coincida con las configuraciones en Azure AD
    }
  };
  
  // Scopes que la aplicación solicitará al usuario
  export const loginRequest = {
    scopes: ['User.Read'] // Modifica según las necesidades de tu aplicación
  };