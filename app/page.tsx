import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ProgramCard from "./components/ProgramCard";

export default function Home() {
  return (
    <>
      <div className="container">
        <Nav />
      </div>

      <main className="container">
        {/* Hero */}
        <section className="hero" style={{ paddingTop: "20px", paddingBottom: "40px", minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div>
            <p className="hero-eyebrow fade-up fade-up-1" style={{ fontSize: "14px", fontFamily: "var(--font-malayalam)" }}>വേനലവധിക്കാല ക്യാമ്പുകൾ 2026</p>
            <div className="fade-up fade-up-2">
              <h1 className="hero-headline" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", lineHeight: 1.4, fontStyle: "normal", fontWeight: 600, color: "var(--accent)", fontFamily: "var(--font-malayalam)" }}>
                അറിവിലേക്കും ധാർമ്മികതയിലേക്കും നമ്മുടെ മക്കളെ നയിക്കാം. 🌿
              </h1>
              <p style={{ marginTop: "16px", fontSize: "17px", color: "var(--text)", lineHeight: 1.7, fontFamily: "var(--font-malayalam)" }}>
                മക്കൾക്ക് നല്ല അറിവും ഉയർന്ന മൂല്യങ്ങളും പകർന്നു നൽകുക എന്നത് ഓരോ മാതാപിതാക്കളുടെയും വലിയ സ്വപ്നമാണ്. ആ സ്വപ്നം കൂടുതൽ സഫലമാക്കാൻ ഈ വേനലവധിക്കാലം കുട്ടികൾക്ക് അറിവും നല്ല ശീലങ്ങളും വളർത്തുന്ന വിധത്തിൽ പ്രയോജനപ്പെടുത്താം.
              </p>
              <p style={{ marginTop: "16px", fontSize: "17px", color: "var(--text)", lineHeight: 1.7, fontFamily: "var(--font-malayalam)" }}>
                ഇതിനായി Wisdom Students സംഘടിപ്പിക്കുന്ന ദീനിപരവും വിജ്ഞാനപരവും പ്രചോദനാത്മകവുമായ ക്യാമ്പുകളിലേക്ക് നിങ്ങളുടെ മക്കളെ ഹൃദയം നിറഞ്ഞ് സ്വാഗതം ചെയ്യുന്നു. ✨
              </p>
            </div>
            <div className="hero-subtext fade-up fade-up-3" style={{ marginTop: "24px", fontSize: "16px", color: "var(--muted)", lineHeight: 1.8, fontFamily: "var(--font-malayalam)" }}>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li style={{ marginBottom: "8px" }}>📚 ഇസ്ലാമിക അറിവുകളും</li>
                <li style={{ marginBottom: "8px" }}>🤝 നല്ല ശീലങ്ങളും</li>
                <li style={{ marginBottom: "8px" }}>🌟 വ്യക്തിത്വ വികസനവും</li>
              </ul>
              <p style={{ marginTop: "12px", fontWeight: 500, color: "var(--text)" }}>ഒരുമിച്ച് വളരുന്ന മനോഹരമായ അവസരം.</p>
            </div>

            <div className="hero-subtext fade-up fade-up-4" style={{ marginTop: "20px", fontSize: "20px", lineHeight: 1.8, color: "var(--text)", fontFamily: "var(--font-malayalam)" }}>
              ഈ വേനലവധിക്കാലം ഏറ്റവും ലക്ഷ്യബോധത്തോടെയും സന്തോഷത്തോടെയും ചെലവഴിക്കാൻ വിസ്ഡം സ്റ്റുഡൻ്റ്സ് മലപ്പുറം ഈസ്റ്റ് ജില്ല ഒരുക്കുന്ന ക്യാമ്പുകളിലേക്ക് സ്വാഗതം.
            </div>

            {/* Scroll Indicator */}
            <div className="fade-up fade-up-5" style={{ marginTop: "40px", display: "flex", alignItems: "center", gap: "10px", color: "var(--muted)" }}>
              <span style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 500 }}>Scroll to explore programs</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "bounce 2s infinite" }}>
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </section>

        <style>{`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
        `}</style>

        {/* Program Cards */}
        <section className="programs" style={{ paddingBottom: "60px" }}>
          <ProgramCard
            number="01 —"
            badge="Primary"
            title="Butterflies"
            tagline="Kids School"
            forStudents="For Class 1 - 4 students (Boys & Girls)"
            dates="9, 10 April 2026"
            duration="2 Days"
            href="/butterflies/register"
            logoUrl="/butterflies-logo.png"
            logoAlt="Butterflies Logo"
            logoScale={0.6}
            logoClass="butterflies-logo-wrapper"
            venue="Perinthalmanna"
            coordinatorPhone="7025589008"
            fee="₹1500"
            delay={1}
          />

          <ProgramCard
            number="02 —"
            badge="UP Students"
            title="Bliss"
            tagline="Summer Hut for UP Students"
            forStudents="For Std 5, 6 & 7 students (Boys only)"
            dates="14, 15 April 2026"
            duration="2 Days"
            href="/bliss/register"
            logoUrl="/bliss-logo.png"
            logoAlt="Bliss Logo"
            logoScale={0.8}
            logoClass="bliss-logo-wrapper"
            venue="Nilambur"
            coordinatorPhone="8078284406"
            fee="₹1500"
            delay={2}
          />

          <ProgramCard
            number="03 —"
            badge="High School"
            title="Jalakam"
            tagline="Residential Camp"
            forStudents="For Boys & Girls"
            dates="14, 15 April 2026"
            duration="2 Days"
            href="/jalakam/register"
            showJalakamLogo
            venue="Nilambur"
            coordinatorPhone="8078284406"
            fee="₹1500"
            delay={3}
          />
        </section>
      </main>

      <div className="container">
        <Footer />
      </div>
    </>
  );
}
