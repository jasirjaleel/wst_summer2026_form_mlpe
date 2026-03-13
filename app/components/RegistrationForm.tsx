"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

interface RegistrationFormProps {
    programName: string;
    standardOptions: string[];
    showParentPhone?: boolean;
}

export default function RegistrationForm({
    programName,
    standardOptions,
    showParentPhone = true,
}: RegistrationFormProps) {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingStep, setLoadingStep] = useState(0);

    const loadingMessages = [
        "Connecting to secure server...",
        "Verifying student details...",
        "Checking contact information...",
        "Processing registration...",
        "Finalizing..."
    ];

    const sanitizePhone = (phone: string | null) => {
        if (!phone) return "";
        let cleaned = phone.replace(/\D/g, "");
        // If it's 11 digits and starts with 0, drop the prefix 0
        if (cleaned.length === 11 && cleaned.startsWith("0")) {
            cleaned = cleaned.substring(1);
        }
        return cleaned;
    };

    const validateForm = (formData: FormData): string | null => {
        const studentPhone = sanitizePhone(formData.get("studentPhone") as string);
        const studentWhatsapp = sanitizePhone(formData.get("studentWhatsapp") as string);
        const parentPhone = sanitizePhone(formData.get("parentPhone") as string);

        if (studentPhone.length !== 10) {
            return "Phone Number must be exactly 10 digits.";
        }
        if (studentWhatsapp.length !== 10) {
            return "WhatsApp Number must be exactly 10 digits.";
        }
        if (parentPhone.length > 0 && parentPhone.length !== 10) {
            return "If provided, Parent Phone Number must be exactly 10 digits.";
        }

        return null;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const validationError = validateForm(formData);

        if (validationError) {
            alert(validationError);
            return;
        }

        setLoading(true);
        setLoadingStep(0);

        // Start cycling through the loading messages
        const stepInterval = setInterval(() => {
            setLoadingStep((prev) => (prev < loadingMessages.length - 1 ? prev + 1 : prev));
        }, 800); // Change message every 800ms

        try {
            const formData = new FormData(e.currentTarget);
            const data = {
                studentName: formData.get("studentName"),
                gender: formData.get("gender"),
                standard: formData.get("standard"),
                schoolName: formData.get("schoolName"),
                zone: formData.get("zone"),
                place: formData.get("place"),
                studentPhone: sanitizePhone(formData.get("studentPhone") as string),
                studentWhatsapp: sanitizePhone(formData.get("studentWhatsapp") as string),
                parentPhone: formData.get("parentPhone") ? sanitizePhone(formData.get("parentPhone") as string) : "",
                programName,
                submittedAt: new Date().toISOString()
            };

            const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

            // To ensure the user sees enough of the animation, enforce a minimum 4-second wait
            const minDelay = new Promise((resolve) => setTimeout(resolve, 4000));

            let fetchPromise;
            if (webhookUrl) {
                const formDataToSend = new FormData();
                Object.entries(data).forEach(([key, value]) => {
                    if (value !== null && value !== undefined) {
                      formDataToSend.append(key, value as string);
                    }
                });

                fetchPromise = fetch(webhookUrl, {
                    method: "POST",
                    mode: "no-cors",
                    body: formDataToSend,
                });
            } else {
                console.warn("NEXT_PUBLIC_N8N_WEBHOOK_URL is not set. Simulating submission.");
                fetchPromise = Promise.resolve();
            }

            // Wait for both the minimum time to pass AND the fetch to finish
            const [response] = await Promise.all([fetchPromise, minDelay]);

            // With no-cors, the response is opaque. 
            // We can't strictly check `response.ok`, we just assume success if it didn't throw a network error.
            if (response && response.type !== "opaque" && !response.ok) {
                throw new Error("Failed to submit form");
            }

            setSubmitted(true);
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error submitting the form. Please try again.");
        } finally {
            clearInterval(stepInterval);
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="loading-screen fade-up fade-up-1" style={{ textAlign: "center", padding: "40px 20px" }}>
                <div className="spinner" style={{
                    width: "40px",
                    height: "40px",
                    border: "3px solid var(--border)",
                    borderTopColor: "var(--red)",
                    borderRadius: "50%",
                    margin: "0 auto 20px auto",
                    animation: "spin 1s linear infinite"
                }}></div>
                <h3 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.5rem",
                    marginBottom: "10px",
                    fontWeight: "normal"
                }}>
                    Hold on a moment.
                </h3>
                <p style={{
                    color: "var(--muted)",
                    fontSize: "0.95rem",
                    transition: "opacity 0.3s ease",
                    minHeight: "24px" // prevent jumping layout
                }}>
                    {loadingMessages[loadingStep]}
                </p>
                <style>{`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}</style>
            </div>
        );
    }

    if (submitted) {
        return (
            <div className="success-message fade-up fade-up-1">
                <div className="success-icon">✓</div>
                <h2>Registration Submitted!</h2>
                <p>
                    Thank you for registering for {programName}. We will contact you
                    shortly with more details.
                </p>
                <Link href="/" className="btn-register">
                    ← Back to Programs
                </Link>
            </div>
        );
    }

    // Helper for input onChange to allow only numbers
    const handlePhoneInput = (e: React.FormEvent<HTMLInputElement>) => {
        // Strip everything but numbers directly as they type
        e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-group fade-up fade-up-1">
                <label className="form-label" htmlFor="studentName">
                    Student Full Name
                </label>
                <input
                    className="form-input"
                    type="text"
                    id="studentName"
                    name="studentName"
                    placeholder="Enter student's full name"
                    autoComplete="off"
                    required
                />
            </div>

            <div className="form-group fade-up fade-up-1">
                <label className="form-label">
                    Gender
                </label>
                <div style={{ display: "flex", gap: "20px", marginTop: "8px" }}>
                    <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                        <input type="radio" name="gender" value="Male" required style={{ cursor: "pointer" }} />
                        Male
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                        <input type="radio" name="gender" value="Female" required style={{ cursor: "pointer" }} />
                        Female
                    </label>
                </div>
            </div>

            <div className="form-group fade-up fade-up-2">
                <label className="form-label" htmlFor="standard">
                    Standard (Class)
                </label>
                <select
                    className="form-select"
                    id="standard"
                    name="standard"
                    required
                    defaultValue=""
                >
                    <option value="" disabled>
                        Select class
                    </option>
                    {standardOptions.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group fade-up fade-up-3">
                <label className="form-label" htmlFor="schoolName">
                    School Name
                </label>
                <input
                    className="form-input"
                    type="text"
                    id="schoolName"
                    name="schoolName"
                    placeholder="Enter school name"
                    autoComplete="off"
                    required
                />
            </div>

            <div className="form-group fade-up fade-up-4">
                <label className="form-label" htmlFor="zone">
                    Zone
                </label>
                <select
                    className="form-select"
                    id="zone"
                    name="zone"
                    required
                    defaultValue=""
                >
                    <option value="" disabled>
                        Select zone
                    </option>
                    <option value="Perintalmanna">Perintalmanna</option>
                    <option value="Pandikkad">Pandikkad</option>
                    <option value="Karuvarakund">Karuvarakund</option>
                    <option value="Kalikavu">Kalikavu</option>
                    <option value="Amarambalam">Amarambalam</option>
                    <option value="Wandoor">Wandoor</option>
                    <option value="Edavanna">Edavanna</option>
                    <option value="Othayi">Othayi</option>
                    <option value="Mampad">Mampad</option>
                    <option value="Nilamboor">Nilamboor</option>
                    <option value="Chungathara">Chungathara</option>
                    <option value="Edakkara">Edakkara</option>
                    <option value="Moothedam">Moothedam</option>
                    <option value="Angaadipuram">Angaadipuram</option>
                    <option value="Aanamangad">Aanamangad</option>
                    <option value="Pattikkad">Pattikkad</option>
                    <option value="Pulamanthole">Pulamanthole</option>
                </select>
            </div>

            <div className="form-group fade-up fade-up-5">
                <label className="form-label" htmlFor="place">
                    Place
                </label>
                <input
                    className="form-input"
                    type="text"
                    id="place"
                    name="place"
                    placeholder="Enter place"
                    autoComplete="off"
                    required
                />
            </div>

            <div className="form-group fade-up fade-up-6">
                <label className="form-label" htmlFor="studentPhone">
                    Phone Number
                </label>
                <input
                    className="form-input"
                    type="tel"
                    id="studentPhone"
                    name="studentPhone"
                    placeholder="10-digit mobile number"
                    maxLength={11}
                    autoComplete="off"
                    onInput={handlePhoneInput}
                    required
                />
            </div>

            <div className="form-group fade-up fade-up-7">
                <label className="form-label" htmlFor="studentWhatsapp">
                    WhatsApp Number
                </label>
                <input
                    className="form-input"
                    type="tel"
                    id="studentWhatsapp"
                    name="studentWhatsapp"
                    placeholder="10-digit mobile number"
                    maxLength={11}
                    autoComplete="off"
                    onInput={handlePhoneInput}
                    required
                />
            </div>

            {showParentPhone && (
                <div className="form-group fade-up fade-up-7">
                    <label className="form-label" htmlFor="parentPhone">
                        Parent Phone Number (Optional)
                    </label>
                    <input
                        className="form-input"
                        type="tel"
                        id="parentPhone"
                        name="parentPhone"
                        placeholder="10-digit mobile number"
                        maxLength={11}
                        autoComplete="off"
                        onInput={handlePhoneInput}
                    />
                </div>
            )}

            <div className="fade-up fade-up-8">
                <button className="btn-submit" type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit Registration →"}
                </button>
            </div>
        </form>
    );
}
