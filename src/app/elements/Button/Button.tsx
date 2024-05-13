"use client"
import styles from './button.module.css'
function Button() {
    const logout = () => {
        console.log("logout");
    }
  return (
    <button 
      className={styles.logout}
      onClick={logout}>
      Logout</button>
  )
}

export default Button;