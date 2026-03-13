import Link from "next/link";
import Image from "next/image";

interface ProgramCardProps {
    number: string;
    badge: string;
    title: string;
    tagline: string;
    forStudents: string;
    dates: string;
    duration: string;
    href: string;
    coordinatorPhone?: string;
    showJalakamLogo?: boolean;
    logoUrl?: string;
    logoAlt?: string;
    logoScale?: number;
    logoClass?: string;
    delay: number;
    hideDurationLabel?: boolean;
    hideDatesLabel?: boolean;
    venue?: string;
    fee?: string;
}

export default function ProgramCard({
    number,
    badge,
    title,
    tagline,
    forStudents,
    dates,
    duration,
    href,
    coordinatorPhone,
    showJalakamLogo,
    logoUrl,
    logoAlt,
    logoScale = 1,
    logoClass = "",
    delay,
    hideDurationLabel = false,
    hideDatesLabel = false,
    venue,
    fee,
}: ProgramCardProps) {
    return (
        <div className={`program-card fade-up fade-up-${delay}`}>
            {showJalakamLogo ? (
                <div className="card-jalakam-wrapper">
                    <img
                        src="/jalakam-logo.png"
                        alt="Jalakam"
                        className="card-jalakam-logo"
                        suppressHydrationWarning
                    />
                </div>
            ) : logoUrl ? (
                <div className="card-jalakam-wrapper">
                    <img
                        src={logoUrl}
                        alt={logoAlt || "Program Logo"}
                        className="card-jalakam-logo"
                        suppressHydrationWarning
                    />
                </div>
            ) : null}

            <div className="card-header">
                <span className="card-number">{number}</span>
                <span className="card-badge">{badge}</span>
            </div>
            <h2 className="card-title">{title}</h2>
            <p className="card-tagline">
                {tagline} · {forStudents}
            </p>
            <div className="card-meta">
                <div className="meta-item">
                    {!hideDatesLabel && <span className="meta-label"><i className="fa-regular fa-calendar"></i> Dates</span>}
                    <span className="meta-value">{dates}</span>
                </div>
                <div className="meta-item">
                    {!hideDurationLabel && <span className="meta-label"><i className="fa-regular fa-hourglass"></i> Duration</span>}
                    <span className="meta-value">{duration}</span>
                </div>
                {venue && (
                    <div className="meta-item">
                        <span className="meta-label"><i className="fa-solid fa-location-dot"></i> Location</span>
                        <span className="meta-value">{venue}</span>
                    </div>
                )}
            </div>

            {fee && (
                <div className="card-meta" style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px dashed var(--border)" }}>
                    <div className="meta-item" style={{ width: "100%" }}>
                        <span className="meta-label">Registration Fee</span>
                        <span className="meta-value" style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--accent)" }}>{fee}</span>
                    </div>
                </div>
            )}

            {coordinatorPhone && (
                <div className="card-meta" style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px dashed var(--border)" }}>
                    <div className="meta-item" style={{ width: "100%" }}>
                        <span className="meta-label">Coordinator</span>
                        <span className="meta-value" style={{ fontSize: "1.1rem", color: "var(--red)" }}>{coordinatorPhone}</span>
                    </div>
                </div>
            )}

            <div className="card-footer">
                <Link href={href} className="btn-register">
                    Register Now <span>→</span>
                </Link>
            </div>
        </div>
    );
}
