import styles from './style.module.css';  


export function Footer() {   

  return <footer className={styles.footer}>

    <a href=''>Entenda como funciona a técnica pomodoro</a>
     <a href=''>Crhonos Pomodoro &copy; {new Date().getFullYear()} - Feito com ❤ </a>
  </footer>


    
} 