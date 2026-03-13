"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function FloatingWhatsApp() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    const options = [
        { name: "Butterflies", number: "917025589008", color: "#f97316" },
        { name: "Bliss", number: "918078284406", color: "#15803d" },
        { name: "Jalakam", number: "918078284406", color: "#0369a1" },
    ];

    return (
        <div className="whatsapp-container fade-up fade-up-5" ref={menuRef}>
            {isOpen && (
                <div className="whatsapp-menu">
                    <div className="whatsapp-menu-header">Which camp?</div>
                    {options.map((opt) => (
                        <Link
                            key={opt.name}
                            href={`https://wa.me/${opt.number}?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%0A%0AI%20have%20a%20doubt%20about%20the%20${opt.name}%20Camp`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp-menu-item"
                            onClick={() => setIsOpen(false)}
                        >
                            <span className="whatsapp-menu-dot" style={{ backgroundColor: opt.color }}></span>
                            {opt.name}
                        </Link>
                    ))}
                </div>
            )}

            <button
                className="floating-whatsapp"
                aria-label="Contact us on WhatsApp"
                onClick={() => setIsOpen(!isOpen)}
            >
                {!isOpen && <div className="floating-whatsapp-tooltip">Have any doubt?</div>}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
            </button>
        </div>
    );
}
