import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"
import { GoogleOAuthProvider } from '@react-oauth/google';

export const HeroesApp = () => {
  return (
    <>
      <AuthProvider>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_GOOGLE_CLIENT_ID}>
          <AppRouter />
        </GoogleOAuthProvider>
      </AuthProvider>
    </>
  )
}
