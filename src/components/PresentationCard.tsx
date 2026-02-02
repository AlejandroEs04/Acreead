import styles from '../styles/presentationCard.module.css'

export default function PresentationCard() {
    return (
        <div className={`${styles.container}`}>
            <img src="/public/profile_image.jpeg" alt="Imagen de Perfil" className={`${styles.profileImage}`} />

            <div className={`${styles.profileData}`}>
                <h4>Raphael Estrada</h4>
                
                <div className={`${styles.positions}`}>
                    <p>Software Developer</p>
                </div>

                <div className={`${styles.socialNetworks}`}>
                    <a href="https://github.com/AlejandroEs04" target='_blank'><i className="fa fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/alejandro-raphael-estrada-lopez-9a8a1321b" target='_blank'><i className="fa fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    )
}
