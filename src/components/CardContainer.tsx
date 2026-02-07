import type { ReactNode } from "react";
import CardTitle from "./CardTitle";
import CardContent from "./CardContent";
import CardImage from "./CardImage";
import styles from '../styles/card.module.css'

function CardContainer({ children } : { children?: ReactNode }) {
    return (
        <div className={styles.card}>
            {children}
        </div>
    )
}

CardContainer.Title = CardTitle;
CardContainer.Content = CardContent;
CardContainer.Image = CardImage;

export default CardContainer
