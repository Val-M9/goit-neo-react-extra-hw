import { NavLink } from 'react-router-dom'
import { routes } from '../../constants/routes'
import styles from './Header.module.css'

const linkClass = ({ isActive }) => {
  return `${styles.link} ${isActive && styles.active}`
}

const Header = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to={routes.HOME} className={linkClass}>
        Home
      </NavLink>
      <NavLink to={routes.CONTACTS} className={linkClass}>
        Contacts
      </NavLink>
      <NavLink to={routes.REGISTER} className={linkClass}>
        Sign Up
      </NavLink>
      <NavLink to={routes.LOGIN} className={linkClass}>
        Login
      </NavLink>
    </nav>
  )
}

export default Header
