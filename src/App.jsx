
import { AppRouter } from './router/AppRouter'
import { AuthProvider } from './auth'
import { Router } from 'react-router-dom'



export const App = () => {
  return (
    <AuthProvider>
        {/* <Router> */}
          <AppRouter/>
        {/* </Router> */}
    </AuthProvider>
  )
}
