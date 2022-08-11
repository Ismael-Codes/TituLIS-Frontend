import { useContext } from "react"
import { AuthContext } from "../../auth"
import { Navbar } from "../../ui"
import { Docente } from "../pages/Docente"
import { Student } from "../pages/Student"

export const MainRoutes = () => {

  const { user } = useContext(AuthContext)

  return (
    <>
      <Navbar />
      <div className="container">
        {
          (user?.userType === 1) ? <Student /> : <Docente />
        }
      </div>
    </>
  )
}
