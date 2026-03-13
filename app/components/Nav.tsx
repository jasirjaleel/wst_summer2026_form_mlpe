import Link from "next/link";
import Image from "next/image";

export default function Nav() {
    return (
        <nav className="nav container">
            <Link href="/" className="nav-logo">
                <Image
                    src="/wisdom-logo-colour.png"
                    alt="Wisdom Students"
                    width={160}
                    height={40}
                    priority
                    suppressHydrationWarning
                />
            </Link>
            <span className="nav-district">Wisdom Students Malappuram East District Committee</span>
        </nav>
    );
}
