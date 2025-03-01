function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© {year} Yusufjon Tolibjonov. All Rights Reserved.</p>
                <a 
                    href="https://github.com/YusufjonTolibjonov" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="footer-link"
                >
                    GitHub Profile
                </a>
            </div>
        </footer>
    );
}

export default Footer;
