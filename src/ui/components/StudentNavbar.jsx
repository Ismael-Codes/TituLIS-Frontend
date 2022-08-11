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
    </>
  )
}
