import { Link } from 'react-router-dom';
import styles from '../views/views.module.css';

const NotFound = () => {
  return (
    <div className={styles.menu}>
      <p className={styles.text}>
        Page now found go to the <Link to="/">Open home page</Link>
      </p>
    </div>
  );
};

export default NotFound;
