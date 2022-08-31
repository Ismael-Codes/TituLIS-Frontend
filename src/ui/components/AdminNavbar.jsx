import { NavLink } from 'react-router-dom';

export const AdminNavbar = () => {

  return (
    <>
      <li className="nav-pills">
        <NavLink
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}

          to="/perfil"
        >
          Perfil
        </NavLink>
      </li>

      <li className="nav-pills">

        <NavLink
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          to="/usuarios"
        >
          Usuarios
        </NavLink>
      </li>

      <li className="nav-pills">

        <NavLink
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          to="/solicitudes"
        >
          Solicitudes
        </NavLink>
      </li>
    </>
  )
}
