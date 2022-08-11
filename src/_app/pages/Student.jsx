import { Navigate, Route, Routes } from "react-router-dom"
import { ProfilePage, Error_404 } from "../../_app/pages"
import { Estado } from "./student/Estado"
import { Solicitud } from "./student/Solicitud"

export const Student = () => {
  return (
    <>
      <Routes>
        <Route path="perfil" element={<ProfilePage />} />
        <Route path="solicitud" element={<Solicitud />} />
        <Route path="estado" element={<Estado />} />

        <Route path="404" element={<Error_404 />} />

        <Route path="/" element={<Navigate to="/perfil" />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  )
}
