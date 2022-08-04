import { useEffect } from "react";
import { handleSignIn } from "../hooks/handleSignIn";

export const LoginButton = () => {

  const { SignIn } = handleSignIn()

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
      callback: SignIn
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        theme: "filled_black",
        style: "large",
      }
    )

    google.accounts.id.prompt();
  })

  return (
    <>
    </>
  )
}
