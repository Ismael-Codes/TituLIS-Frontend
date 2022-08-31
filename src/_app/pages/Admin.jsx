import { Solicitudes } from "./admin/Solicitudes"
import { Navigate, Route, Routes } from "react-router-dom"
import { ProfilePage, Error_404 } from "../pages"
import { Usuarios } from "./admin/Usuarios"
import { UsuarioPage } from "./admin/components/UsuarioPage"

export const Admin = () => {
  return (
    <>
      <Routes>
        <Route path="perfil" element={<ProfilePage />} />

        <Route path="solicitudes" element={<Solicitudes />} />

        <Route path="usuarios" element={<Usuarios />} />

        <Route path="usuario/:id" element={<UsuarioPage />} />

        <Route path="404" element={<Error_404 />} />

        <Route path="/" element={<Navigate to="/perfil" />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  )
}
