import { CRUDPage } from "./docente/CRUDPage"
import { SearchPage } from "./docente/SearchPage"
import { Navigate, Route, Routes } from "react-router-dom"
import { ProfilePage, Error_404 } from "../pages"

export const Docente = () => {
  return (
    <>
      <Routes>
        <Route path="perfil" element={<ProfilePage />} />

        <Route path="crud" element={<CRUDPage />} />
        <Route path="search" element={<SearchPage />} />

        <Route path="404" element={<Error_404 />} />

        <Route path="/" element={<Navigate to="/perfil" />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  )
}
