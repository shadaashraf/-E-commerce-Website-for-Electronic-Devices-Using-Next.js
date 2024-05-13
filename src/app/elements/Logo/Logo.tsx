import Link from "next/link";
import styles from "./logo.module.css"
import { Montserrat } from "next/font/google";
const logoFont = Montserrat({ 
    subsets: ["latin"],
    weight: ["400"]
 });

function Logo() {
  return (
    <Link href="/" className={`${styles.logo} ${logoFont.className}`}>HEXASHOP</Link>
  )
}

export default Logo;