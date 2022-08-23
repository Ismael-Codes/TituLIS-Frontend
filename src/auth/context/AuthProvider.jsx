import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

/* const initialState = {
  logged: false
} */

//* Lee lo que esta en el localStorage
const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    // logged: true,
    user: user,
  }
}

export const AuthProvider = ({ children }) => {

  const [authState, dispatch] = useReducer(authReducer, {}, init)

  const inputsData = async (label, info, inputFile, inputText, inputSelect) => {

    const data = (label, info, inputFile, inputText, inputSelect);

  }

  //* Login, recibe los argumentos y hace el login
  const login = async (given_name = ' ', aPaterno = ' ', aMaterno = ' ', email = ' ', matricula = ' ', picture = ' ', sub = '', userType = '', newUser) => {

    const user = { id: sub, given_name, aPaterno, aMaterno, email, matricula, picture, userType, newUser }

    const action = { type: types.login, payload: user }

    //*Guarda el usuario en el localStorage
    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action)
  }

  //* Cierra la sesion del usuario y borra el localStorage
  const logout = async () => {
    localStorage.removeItem('user');

    //* Accion de cerrar sesion del useReducer
    const action = { type: types.logout }

    dispatch(action);
  }

  //* Retorno de los valores
  return (
    <AuthContext.Provider value={{
      ...authState,

      //Methods
      inputsData,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}
