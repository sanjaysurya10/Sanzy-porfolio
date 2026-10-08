import type { Metadata } from "next";
import Link from "next/link";

// The layout title template does not apply to a page in the same segment as the root layout.
export const metadata: Metadata = { title: { absolute: "Sanjay Surya - Home" } };

export default function HomePage(): JSX.Element {
  return (
    <div>
      {/* Header*/}
      <header className="py-5">
        <div className="container px-5 pb-5">
          <div className="row gx-5 align-items-center">
            <div className="col-xxl-5">
              {/* Header text content*/}
              <div className="text-center text-xxl-start">
                <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                  <div className="text-uppercase" id="typed-text"></div>
                </div>
                <div className="intro-subtext">Hi there, I&apos;m</div>
                <h1 className="display-3 fw-bolder mb-5 custom-name"><span>SANJAY SURYA</span></h1>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                  <Link className="btn-primary" href="/resume">Resume</Link>
                  <Link className="btn-primary" href="/projects">Projects</Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-7">
              {/* Header profile picture — Neon Circuit Panel */}
              <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                <div className="circuit-panel-wrapper">

                  {/* Floating code symbols */}
                  <span className="code-sym sym-1">{"{ }"}</span>
                  <span className="code-sym sym-2">&lt;/&gt;</span>
                  <span className="code-sym sym-3">=&gt;</span>
                  <span className="code-sym sym-4">const</span>
                  <span className="code-sym sym-5">()</span>
                  <span className="code-sym sym-6">//</span>
                  <span className="code-sym sym-7">#</span>
                  <span className="code-sym sym-8">$_</span>

                  {/* Circuit SVG overlay */}
                  <svg className="circuit-svg" viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <defs>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                        <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                      </filter>
                    </defs>
                    {/* Panel border */}
                    <rect x="2" y="2" width="396" height="516" rx="28" ry="28"
                      fill="none" stroke="rgba(0,200,255,0.12)" strokeWidth="1.5" />
                    {/* Circuit traces */}
                    <path className="c-trace ct1" d="M60,2 L200,2 L240,2" fill="none" stroke="rgba(0,220,255,0.9)" strokeWidth="1.5" filter="url(#glow)" />
                    <path className="c-trace ct2" d="M398,80 L398,260 L398,380" fill="none" stroke="rgba(80,140,255,0.9)" strokeWidth="1.5" filter="url(#glow)" />
                    <path className="c-trace ct3" d="M340,518 L200,518 L100,518" fill="none" stroke="rgba(0,220,255,0.9)" strokeWidth="1.5" filter="url(#glow)" />
                    <path className="c-trace ct4" d="M2,420 L2,260 L2,120" fill="none" stroke="rgba(80,140,255,0.9)" strokeWidth="1.5" filter="url(#glow)" />
                    {/* Branch traces */}
                    <path className="c-trace ct5" d="M60,2 L60,30 L30,30" fill="none" stroke="rgba(0,220,255,0.7)" strokeWidth="1" filter="url(#glow)" />
                    <path className="c-trace ct6" d="M340,518 L340,490 L370,490" fill="none" stroke="rgba(0,220,255,0.7)" strokeWidth="1" filter="url(#glow)" />
                    <path className="c-trace ct7" d="M398,80 L370,80 L370,50" fill="none" stroke="rgba(80,140,255,0.7)" strokeWidth="1" filter="url(#glow)" />
                    <path className="c-trace ct8" d="M2,420 L30,420 L30,450" fill="none" stroke="rgba(80,140,255,0.7)" strokeWidth="1" filter="url(#glow)" />
                    {/* Corner nodes */}
                    <circle className="c-node" cx="2" cy="2" r="4" fill="#00dcff" filter="url(#glow)" />
                    <circle className="c-node" cx="398" cy="2" r="4" fill="#00dcff" filter="url(#glow)" />
                    <circle className="c-node" cx="398" cy="518" r="4" fill="#00dcff" filter="url(#glow)" />
                    <circle className="c-node" cx="2" cy="518" r="4" fill="#00dcff" filter="url(#glow)" />
                    {/* Mid nodes */}
                    <circle className="c-node nd2" cx="60" cy="2" r="3" fill="#508cff" filter="url(#glow)" />
                    <circle className="c-node nd2" cx="340" cy="518" r="3" fill="#508cff" filter="url(#glow)" />
                    <circle className="c-node nd2" cx="398" cy="80" r="3" fill="#508cff" filter="url(#glow)" />
                    <circle className="c-node nd2" cx="2" cy="420" r="3" fill="#508cff" filter="url(#glow)" />
                  </svg>

                  {/* Profile image inside panel */}
                  <div className="profile" style={{ borderRadius: "26px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="profile-img" src="/assets/images/profile.png" alt="Sanjay Surya" />
                  </div>

                </div>{/* /circuit-panel-wrapper */}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section*/}
      <section id="about-section" className="py-5" style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}>
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xxl-8">
              <div className="text-center my-5">
                <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">About Me</span></h2>
                <p className="lead fw-light mb-4">My name is Sanjay Surya K, and I am a Computer Science graduate with a strong passion for building intelligent and scalable solutions.</p>
                <p className="text"><strong>I completed my Bachelor&apos;s degree in Computer Science from Anna University and completed my Master&apos;s in Data Science and Analytics at Maynooth University (2025–2026). I have a keen interest in Artificial Intelligence, backend development, and data-driven applications. I enjoy developing dynamic web applications and applying machine learning techniques to solve real-world problems.</strong></p>
                <div className="d-flex justify-content-center fs-2 gap-4">
                  <a className="text-gradient" href="https://x.com/sanjaysurya10" target="_blank" rel="noopener"><i className="bi bi-twitter-x"></i></a>
                  <a className="text-gradient" href="https://linkedin.com/in/sanjay-surya-1609a9293" target="_blank" rel="noopener"><i className="bi bi-linkedin"></i></a>
                  <a className="text-gradient" href="https://github.com/sanjaysurya10" target="_blank" rel="noopener"><i className="bi bi-github"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
