import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from 'react-router-dom';

export const DocenteNavbar = () => {

  return (
    <>
      <li className="nav-pills">
        <NavLink
          // startIcon={<FontAwesomeIcon icon={PersonIcon} />}
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}

          to="/perfil"
        >
          Perfil
        </NavLink>
      </li>

      <li className="nav-pills">

        <NavLink
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          to="/crud"
        >
          CRUD
        </NavLink>
      </li>

      <li className="nav-pills">

        <NavLink
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          to="/search"
        >
          Search
        </NavLink>
      </li>
    </>
  )
}
