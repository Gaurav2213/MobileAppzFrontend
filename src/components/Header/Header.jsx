import { Link } from "react-router-dom";
import styles from "./Header.module.css";

//TODO: Update the header class with context api
//TODO: Handle routes based on user state 
export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          Mobile Appz
        </Link>
        <div className={styles.linkContainer}>
          <Link to="/login" className={styles.linkItem}>Login</Link>
          <Link to="/register" className={styles.linkItem}>Sign Up</Link>
          <Link to="/dashboard" className={styles.linkItem}>Dashboard</Link>
          <Link to="/heatmap" className={styles.linkItem}>Heatmap</Link>
          <Link to="/report" className={styles.linkItem}>New Report</Link>
          <Link to="/admin" className={styles.linkItem}>Admin Panel</Link>
          {/* TODO:Replace with actual logout function */}
          <button onClick={() => console.log("Logging out")} className={`${styles.linkItem} ${styles.logoutBtn}`}>Logout</button>
        </div>
      </nav>
    </header>
  );
}
