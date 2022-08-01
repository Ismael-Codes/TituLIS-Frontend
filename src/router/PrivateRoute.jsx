import { useContext } from "react"
import {Navigate} from 'react-router-dom'

import { AuthContext } from "../auth"

export const PrivateRoute = ({ children }) => {

  //* Si esta autenticado se mostraran los demas components, 'logged: true' es logeado
  const { logged } = useContext(AuthContext)

  //^ Children es los demas components
  return (logged)
    ? children
    : <Navigate to="/login" />
}
