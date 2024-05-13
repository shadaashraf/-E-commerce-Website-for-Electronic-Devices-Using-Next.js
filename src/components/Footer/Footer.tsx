import Image from "next/image";
import styles from "./footer.module.css"
import { social_media } from "./data";
function Footer() {
    return(
      <div className={styles.container}>
        <div>©2023 Hexashop. All rights reserved.</div>
        <div className={styles.social}>
          {
            social_media.map(media => 
                <Image 
                key={media.id}
                src={`/images/icons/${media.media}.png`}
                width={20}
                height={20}
                className={styles.icon}
                alt={`Hexashop ${media.media} link`}
              />
            )
          }
        </div>
      </div>
    )
  }
  
export default Footer;