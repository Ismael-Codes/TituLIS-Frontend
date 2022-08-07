import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { CRUDPage, HeroesPage, ProfilePage, SearchPage, Error_404 } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="perfil" element={<ProfilePage />} />
          <Route path="crud" element={<CRUDPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroesPage />} />

          <Route path="error_404" element={<Error_404 />} />
          
          <Route path="/" element={<Navigate to="/perfil" />} />
          <Route path="*" element={<Navigate to="/error_404" />} />
        </Routes>
      </div>
    </>
  )
}
