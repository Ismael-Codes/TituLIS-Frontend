import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { CRUDPage, HeroesPage, ProfilePage, SearchPage } from "../pages"

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

          <Route path="/" element={<Navigate to="/perfil" />} />
        </Routes>
      </div>
    </>
  )
}
