import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import RegistrationForm from "../../components/RegistrationForm";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Register — Butterflies | Wisdom Students Malappuram East District Committee",
    description:
        "Register for Butterflies Kids School — a 2-day summer camp for Class 1 - 4 students by Wisdom Students Malappuram East District Committee.",
};

export default function ButterfliesRegister() {
    return (
        <>
            <div className="container">
                <Nav />
            </div>

            <main className="container register-page">
                <Link href="/" className="back-link fade-up fade-up-1">
                    ← Back to Programs
                </Link>

                <div className="register-header fade-up fade-up-2">
                    <span className="card-badge">Primary</span>
                    <h1 className="register-title">Butterflies</h1>
                    <p className="register-date">9, 10 April 2026 · 2 Days · Perinthalmanna</p>
                </div>

                <RegistrationForm
                    programName="Butterflies"
                    standardOptions={["Class 1", "Class 2", "Class 3", "Class 4"]}
                    showParentPhone={false}
                />
            </main>

            <div className="container">
                <Footer />
            </div>
        </>
    );
}
