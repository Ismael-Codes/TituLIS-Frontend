import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';
import { AiOutlineLogout } from "react-icons/ai";
import { IconContext } from "react-icons";
import { DocenteNavbar } from './DocenteNavbar';
import { StudentNavbar } from './StudentNavbar';

export const Navbar = () => {

  //* Extrae el usuario almacenado
  const { user, logout } = useContext(AuthContext)

  const navigate = useNavigate();

  //* Cierra sesion, llama la funcion logout del AuthProvider
  const onLogout = () => {
    logout();

    navigate('/login', { replace: true });
  };

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">

      <Link
        className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none mx-4"
        to="/"
      >
        <span className="fw-bold fs-5 text-center">Plataforma para Control y Seguimiento de Titulación</span>
      </Link>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        {
          (user?.userType === 1) ? <StudentNavbar /> : <DocenteNavbar />
        }
      </ul>

      <div className="col-md-3 text-end mx-4">
        <button type="button" className="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">

          {/* //? Image */}
          <img src={user?.picture} alt="" width="32" height="32" className="rounded-circle" />

          {/* //? Icon */}
          {/* 
            <IconContext.Provider value={{ color: "light", size: "1.5em" }}>
              <AiOutlineUser />
            </IconContext.Provider> */}
          <span className="ms-1">
            {`${user?.given_name} ${user?.aPaterno} ${user?.aMaterno}`}
          </span>
        </button>
        <ul className="dropdown-menu dropdown-menu-light">
          <li><a className="dropdown-item text-center" href="#" onClick={() => onLogout()}>
            <IconContext.Provider value={{ color: "light", size: "1.3em" }}>
              <AiOutlineLogout />
            </IconContext.Provider>
            <span className="ms-2">logout</span></a></li>
        </ul>
      </div>
    </header>
  )
}