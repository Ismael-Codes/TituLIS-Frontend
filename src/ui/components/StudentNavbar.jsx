import { NavLink } from 'react-router-dom';

export const StudentNavbar = () => {
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

          to="/solicitud"
        >
          Solicitud
        </NavLink>
      </li>

      <li className="nav-pills">
        <NavLink
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}

          to="/estado"
        >
          Subir Archivo
        </NavLink>
      </li>
    </>
  )
}
