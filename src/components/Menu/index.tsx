import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon} from 'lucide-react';
import { useState, useEffect, use } from 'react';
import styles from './style.module.css';  

type AvaiLableThemes = 'dark' | 'light';

export function Menu() {  
  
  const [theme, setTheme] = useState<AvaiLableThemes>(
    () => {
      const storageTheme = (localStorage.getItem('theme') as AvaiLableThemes) || 'dark';
      return storageTheme;
    }
  );
  

  // Função para alternar o tema
  // e atualizar o estado do tema
const nexThemeIcon = {
  dark: <SunIcon />,
  light: <MoonIcon />
};


 function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {

    event.preventDefault();
   
    setTheme((prevTheme) => {
     const nexTheme =  prevTheme === 'dark' ? 'light' : 'dark'
     return nexTheme;
     
    });    
    
  }

useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}, [theme]);

 
  return (
  <nav className={styles.menu}> 
  <h1>{theme}</h1>   
   <a className={styles.menuLink} href="#"
    aria-label='Ir para Home' 
    title=' Ir para Home'>
  <HouseIcon/>    
  </a>

  <a className={styles.menuLink} href="#"
   aria-label='Ver Histórico' 
    title='Ver histórico'>    
  <HistoryIcon/>    
  </a> 
  
  <a className={styles.menuLink} href="#"
   aria-label='Configurações' 
    title='Configurações'>
  <SettingsIcon/>    
  </a> 
  
  <a className={styles.menuLink} href="#"
   aria-label='Mudar tema' 
    title='Mudar tema'
    onClick={handleThemeChange}
    >
    
  {nexThemeIcon[theme]}    
  </a>
  </nav>
  );
} 