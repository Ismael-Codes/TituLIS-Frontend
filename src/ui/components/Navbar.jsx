import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';
import { AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { IconContext } from "react-icons";

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
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

      <Link
        className="navbar-brand"
        to="/"
      >
        Project 34793
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">

          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            to="/perfil"
          >
            Perfil
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            to="/dc"
          >
            Example
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">


        <div className="btn-group me-1" role="group">
          <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">

            <IconContext.Provider value={{ color: "light", size: "1.5em" }}>
              <AiOutlineUser />
            </IconContext.Provider>
            <span className="ms-1">
              {`${user?.given_name} ${user?.aPaterno} ${user?.aMaterno}`}
            </span>
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="dropdown-item text-center" href="#" onClick={() => onLogout()}>
              <IconContext.Provider value={{ color: "light", size: "1.3em" }}>
                <AiOutlineLogout />
              </IconContext.Provider>
              <span className="ms-2">logout</span></a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}