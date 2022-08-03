import { NavLink } from 'react-router-dom';
import styles from '../Navigation/Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.nav_link_active : styles.nav_link
            }
          >
            Home
          </NavLink>
        </li>
        <li className={styles.nav_item}>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? styles.nav_link_active : styles.nav_link
            }
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
