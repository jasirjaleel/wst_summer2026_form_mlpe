import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import RegistrationForm from "../../components/RegistrationForm";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Register — Bliss | Wisdom Students Malappuram East District Committee",
    description:
        "Register for Bliss Summer Hut — a 2-day summer camp for Std 5, 6 & 7 students (Boys only) by Wisdom Students Malappuram East District Committee.",
};

export default function BlissRegister() {
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
                    <span className="card-badge">UP Students</span>
                    <h1 className="register-title">Bliss (Boys only)</h1>
                    <p className="register-date">14, 15 April 2026 · 2 Days · Nilambur</p>
                </div>

                <RegistrationForm
                    programName="Bliss"
                    standardOptions={["Std 5", "Std 6", "Std 7"]}
                />
            </main>

            <div className="container">
                <Footer />
            </div>
        </>
    );
}
