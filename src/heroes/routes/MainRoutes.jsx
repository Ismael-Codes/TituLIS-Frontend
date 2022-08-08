import { useContext } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthContext } from "../../auth"
import { Navbar } from "../../ui"
import { CRUDPage, HeroesPage, ProfilePage, SearchPage, Error_404 } from "../pages"

export const MainRoutes = () => {

  const user = JSON.parse(localStorage.getItem('user'));

  const { userType } = user
  console.log(userType, 'localStorage')

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="perfil" element={<ProfilePage />} />

          {
            (userType) ? <Route path="crud" element={<CRUDPage />} /> : <Route path="search" element={<SearchPage />} />

          }
          <Route path="hero/:id" element={<HeroesPage />} />

          <Route path="404" element={<Error_404 />} />

          <Route path="/" element={<Navigate to="/perfil" />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
    </>
  )
}
