import { NavLink } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

export const StudentNavbar = () => {
  return (
    <>
      <li className="nav-pills">
        <NavLink
          startIcon={<FontAwesomeIcon icon={PersonIcon} />}
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
    </>
  )
}
