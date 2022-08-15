import { useSignIn } from "../hooks/useSignIn";
import { GoogleLogin } from '@react-oauth/google';
import { LoadingProgress } from "./CircularLoading";

export const LoginButton = () => {

  const { SignIn, isLoading } = useSignIn()

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        className="mb-2">
        {
          (isLoading)
            ? <LoadingProgress />
            : <GoogleLogin
              /* onSuccess={credentialResponse => {
                console.log(credentialResponse);
              }} */
              onSuccess={SignIn}
              onError={() => {
                console.log('Login Failed');
              }}
              theme="filled_black"
              text="continue_with"
              useOneTap={true}
            />
        }
      </div>
    </>
  )
}
