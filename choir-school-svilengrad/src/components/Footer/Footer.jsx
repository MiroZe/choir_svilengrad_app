import styles from './Footer.module.css'


const Footer = () => {

return (
    <footer className={styles['footer']}>
        <div className="contact-info">
        <div className="address">
            <p></p>
            <p>Svilengrad, 6500, Bulgaria</p>
        </div>
        <div className="phone">
            <p>Phone: +1 (123) 456-7890</p>
        </div>
    </div>
    <div className={styles['social-icons']}>
        <a href="https://www.instagram.com/choir.school_svilengrad/?fbclid=IwAR1js_lBSCcgckhNj12sm80rUqCI1k1N0N5yM9Q_6K_98roNKxSZtSsFoWA" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://www.facebook.com/groups/642507609155386/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
        <a href="https://jmfbg.org/bg/" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-globe"></i></a>
    </div>
    <div className="copyright">
        <p>&copy; 2023 MiroZe. All rights reserved.</p>
    </div>
</footer>


)

}

export default Footer