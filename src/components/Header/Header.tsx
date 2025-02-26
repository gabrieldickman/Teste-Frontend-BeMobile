import styles from "./Header.module.css";

interface HeaderProps {
  logo: string;
  altText?: string;
}

function Header({logo, altText = "BeTalent Logo"}: HeaderProps) {
  return (
    <div className={styles.header}>
      <img src={logo} alt={altText} className={styles.logo}/>
    </div>
  )
}

export default Header