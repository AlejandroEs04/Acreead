import type { ReactNode } from "react"
import styles from '../styles/infoCard.module.css'

function Title({ value } : { value : string }) {
    return (
        <h3 className={styles.title}>{value}</h3>
    )
}

function Subtext({ value } : { value : string }) {
    return (
        <p className={styles.subtext}>{value}</p>
    )
}

function Date({ value } : { value : string }) {
    return (
        <p className={styles.date}>{value}</p>
    )
}

function Content({ value } : { value : string }) {
    return (
        <p className={styles.text}>{value}</p>
    )
}

function InfoCard({ children, className } : { children? : ReactNode, className? : string }) {
    return (
        <div className={`grid ${styles.container} ${className}`}>
            {children}
        </div>
    )
}

InfoCard.Title = Title
InfoCard.Date = Date
InfoCard.Content = Content
InfoCard.Subtext = Subtext

export default InfoCard
