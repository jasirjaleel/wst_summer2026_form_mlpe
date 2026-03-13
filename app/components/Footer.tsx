
export default function Footer() {
    return (
        <footer className="footer container">
            <div className="footer-content">
                <div className="footer-logo">
                    <img
                        src="/wisdom-logo-colour.png"
                        alt="Wisdom Students"
                        width={160}
                        height={40}
                        suppressHydrationWarning
                    />
                </div>

                <p className="footer-text" style={{ marginTop: '12px' }}>
                    Wisdom Students Malappuram East District Committee · 2026
                </p>
            </div>
        </footer>
    );
}
