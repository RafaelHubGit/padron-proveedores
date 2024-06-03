
import { AppRouter } from './router/AppRouter'
import { AuthProvider } from './auth'
import { Router } from 'react-router-dom'

import 'animate.css';



export const App = () => {
  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  )
}
