import Image from "next/image";
import styles from "./card.module.css"
export default function Card(){
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={'/images/dinnerTable.jpg'} alt='Dinner Table' fill={true} objectFit='cover'/>
            </div>
            <div className={styles.cardheadertext}>
                Dinner tables
            </div>
            <div className={styles.cardtext}>
                Eat
            </div>
        </div>
    );
}