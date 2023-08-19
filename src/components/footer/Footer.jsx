function Footer() {

    const currentYear = new Date().getFullYear();

    return(

        <footer className="footer">
            <h6>Upright Project: React Chat Copyright {currentYear}&copy;</h6>
        </footer>
    )
}

export default Footer;