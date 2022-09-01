import { useContext } from "react"
import { AuthContext } from "../../auth"
import { Navbar } from "../../ui"
import { Docente } from "../pages/Docente"
import { Student } from "../pages/Student"
import { Admin } from "../pages/Admin"

export const MainRoutes = () => {

  const { user } = useContext(AuthContext)

  return (
    <>
      <Navbar />
      <div className="container">
        {
          (user.userType == 3)
            ? <Admin />
            : (user.userType == 2) ? <Docente /> : <Student />
        }
      </div>
    </>
  )
}
