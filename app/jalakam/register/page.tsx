import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import RegistrationForm from "../../components/RegistrationForm";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Register — Jalakam | Wisdom Students",
    description:
        "Register for Jalakam Sahavas Camp — a 3-day summer camp for students by Wisdom Students Thrissur.",
};

export default function JalakamRegister() {
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
                    <span className="card-badge">High School</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        <h1 className="register-title">Jalakam</h1>
                        <Image
                            src="/jalakam-logo.png"
                            alt="Jalakam Logo"
                            width={80}
                            height={30}
                            style={{ opacity: 0.85 }}
                            suppressHydrationWarning
                        />
                    </div>
                    <p className="register-date">14, 15 April 2026 · 2 Days · Nilambur</p>
                </div>

                <RegistrationForm
                    programName="Jalakam"
                    standardOptions={["Std 8", "Std 9", "Std 10"]}
                />
            </main>

            <div className="container">
                <Footer />
            </div>
        </>
    );
}
