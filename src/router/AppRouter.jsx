import { Route, Routes } from "react-router-dom"

import { MainRoutes } from '../_app';
import { LoginPage } from "../auth"
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

  return (
    <>
      <Routes>
        <Route path="login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }>
        </Route>

        <Route path="/*" element={
          <PrivateRoute >
            <MainRoutes />
          </PrivateRoute >
        } />

      </Routes>
    </>
  )
}
