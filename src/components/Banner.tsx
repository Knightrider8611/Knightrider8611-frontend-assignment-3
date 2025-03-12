import Image from "next/image";
import styles from "./banner.module.css"
export default function Banner(){
    return (
        <div className={styles.banner}>
            <Image src={'/images/cover.jpg'} alt='cover' fill={true} priority objectFit='cover'/>
            <div className={styles.bannerText}>
            <h1>where every event finds its venue</h1>
            <h3>If you love a perfect party place, we are the one you are looking for.</h3>
            </div>
        </div>
    );
}