import type { Metadata } from "next";
import Link from "next/link";

import ProjectsEffects from "@/components/ProjectsEffects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage(): JSX.Element {
  return (
    <div>
      <div className="container px-4 py-5" style={{ position: "relative", zIndex: 1 }}>

        {/* HEADING */}
        <div className="projects-heading">
          <div className="sub-label">// my work</div>
          <h2>Projects</h2>
          <p>hover the cards to explore &middot; click links to view</p>
        </div>

        {/* FEATURED LABEL */}
        <div className="section-sub">Featured Projects</div>

        {/* FLIP CARDS */}
        <div className="flip-grid">

          {/* CARD 1: AI CHATBOT */}
          <div className="flip-wrapper card-cyan">
            <div className="flip-inner">
              <div className="flip-front">
                <div className="card-icon">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g className="bot-body">
                      <rect x="6" y="10" width="24" height="18" rx="5" fill="rgba(0,245,255,0.15)" stroke="#00f5ff"
                        strokeWidth="1.2" />
                      <rect x="14" y="6" width="8" height="5" rx="2" fill="rgba(0,245,255,0.2)" stroke="#00f5ff"
                        strokeWidth="1" />
                      <circle cx="18" cy="8" r="1.2" fill="#00f5ff" />
                      <circle className="bot-eye-l" cx="13" cy="19" r="2.2" fill="#00f5ff" opacity=".9" />
                      <circle className="bot-eye-r" cx="23" cy="19" r="2.2" fill="#00f5ff" opacity=".9" />
                      <rect x="13" y="23" width="10" height="2" rx="1" fill="rgba(0,245,255,0.5)" />
                    </g>
                    <circle className="bubble-1" cx="31" cy="10" r="2.5" fill="rgba(0,245,255,0.3)" stroke="#00f5ff"
                      strokeWidth=".8" />
                    <circle className="bubble-2" cx="5" cy="14" r="1.8" fill="rgba(0,245,255,0.2)" stroke="#00f5ff"
                      strokeWidth=".6" />
                  </svg>
                  <span className="pulse-dot"></span>
                </div>
                <div className="card-meta">
                  <div className="card-tag">AI &middot; NLP</div>
                  <div className="card-title">AI Chat-Bot</div>
                  <div className="card-tagline">Voice-enabled intelligent assistant with real-time NLP and speech recognition
                  </div>
                </div>
                <div className="flip-hint">&#8635; hover to flip</div>
              </div>
              <div className="flip-back">
                <div className="card-title">AI Chat-Bot</div>
                <div className="card-desc">NLP-powered conversational assistant built with Python. Integrates text-to-speech
                  and speech-to-text for seamless two-way voice interaction. Capable of answering questions, opening apps,
                  and fetching real-time data — 92% contextual accuracy across 500+ test queries.</div>
                <div className="tech-stack">
                  <span className="tech-badge">Python</span>
                  <span className="tech-badge">NLP</span>
                  <span className="tech-badge">SpeechRecognition</span>
                  <span className="tech-badge">pyttsx3</span>
                  <span className="tech-badge">NLTK</span>
                </div>
                <div className="back-links">
                  <a href="#" className="btn-demo">&#9654; View Project</a>
                  <a href="https://github.com/sanjaysurya10" target="_blank" rel="noopener" className="btn-git">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: EMAIL AUTH */}
          <div className="flip-wrapper card-purple">
            <div className="flip-inner">
              <div className="flip-front">
                <div className="card-icon">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="14" y="4" width="8" height="16" rx="4" fill="rgba(191,95,255,0.15)" stroke="#bf5fff"
                      strokeWidth="1.2" />
                    <path d="M8 18c0 5.523 4.477 10 10 10s10-4.477 10-10" stroke="#bf5fff" strokeWidth="1.3"
                      strokeLinecap="round" />
                    <line x1="18" y1="28" x2="18" y2="33" stroke="#bf5fff" strokeWidth="1.3" strokeLinecap="round" />
                    <line x1="13" y1="33" x2="23" y2="33" stroke="#bf5fff" strokeWidth="1.3" strokeLinecap="round" />
                    <rect className="wave-bar-1" x="4" y="21" width="2.5" height="4" rx="1.2" fill="#bf5fff" opacity=".7"
                      transformOrigin="5.25 23" />
                    <rect className="wave-bar-2" x="8" y="19" width="2.5" height="6" rx="1.2" fill="#bf5fff" opacity=".8"
                      transformOrigin="9.25 22" />
                    <rect className="wave-bar-3" x="25.5" y="19" width="2.5" height="6" rx="1.2" fill="#bf5fff" opacity=".8"
                      transformOrigin="26.75 22" />
                    <rect className="wave-bar-4" x="29.5" y="21" width="2.5" height="4" rx="1.2" fill="#bf5fff" opacity=".7"
                      transformOrigin="30.75 23" />
                  </svg>
                  <span className="pulse-dot"></span>
                </div>
                <div className="card-meta">
                  <div className="card-tag">Security &middot; Full Stack</div>
                  <div className="card-title">E-mail Authentication</div>
                  <div className="card-tagline">Secure OTP + JWT authentication system with Spring Boot &amp; ReactJS</div>
                </div>
                <div className="flip-hint">&#8635; hover to flip</div>
              </div>
              <div className="flip-back">
                <div className="card-title">E-mail Authentication</div>
                <div className="card-desc">Full-stack auth system with email OTP verification and JWT session handling. Spring
                  Boot backend with JavaMail SMTP, ReactJS frontend styled with Bootstrap 5. MySQL stores credentials
                  securely — 99% OTP verification success across 1,000+ simulated transactions.</div>
                <div className="tech-stack">
                  <span className="tech-badge">Spring Boot</span>
                  <span className="tech-badge">ReactJS</span>
                  <span className="tech-badge">JWT</span>
                  <span className="tech-badge">JavaMail</span>
                  <span className="tech-badge">MySQL</span>
                </div>
                <div className="back-links">
                  <a href="#" className="btn-demo">&#9654; View Project</a>
                  <a href="https://github.com/sanjaysurya10" target="_blank" rel="noopener" className="btn-git">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3: SANZY CAREERS */}
          <div className="flip-wrapper card-amber">
            <div className="flip-inner">
              <div className="flip-front">
                <div className="card-icon">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="10" width="28" height="20" rx="4" fill="rgba(255,184,48,0.12)" stroke="#ffb830"
                      strokeWidth="1.2" />
                    <rect x="13" y="6" width="10" height="5" rx="2" fill="rgba(255,184,48,0.2)" stroke="#ffb830"
                      strokeWidth="1" />
                    <circle cx="12" cy="20" r="3" fill="rgba(255,184,48,0.2)" stroke="#ffb830" strokeWidth="1" />
                    <circle cx="24" cy="20" r="3" fill="rgba(255,184,48,0.2)" stroke="#ffb830" strokeWidth="1" />
                    <line x1="15" y1="20" x2="21" y2="20" stroke="#ffb830" strokeWidth="1" strokeDasharray="2 2" />
                    <rect x="8" y="25" width="6" height="2" rx="1" fill="rgba(255,184,48,0.5)" />
                    <rect x="16" y="25" width="12" height="2" rx="1" fill="rgba(255,184,48,0.3)" />
                    <circle className="dot-a" cx="11" cy="14" r="1.2" fill="#ffb830" />
                    <circle className="dot-b" cx="18" cy="14" r="1.2" fill="#ffb830" />
                    <circle className="dot-c" cx="25" cy="14" r="1.2" fill="#ffb830" />
                  </svg>
                  <span className="pulse-dot"></span>
                </div>
                <div className="card-meta">
                  <div className="card-tag">AI &middot; Electron &middot; In Progress</div>
                  <div className="card-title">Sanzy Careers</div>
                  <div className="card-tagline">AI-powered desktop app for job hunting with interview co-pilot</div>
                </div>
                <div className="flip-hint">&#8635; hover to flip</div>
              </div>
              <div className="flip-back">
                <div className="card-title">Sanzy Careers</div>
                <div className="card-desc">Desktop application built with Electron featuring an AI interview co-pilot and auto
                  job-application module. Streamlines the entire job search workflow with intelligent assistance, resume
                  parsing, and application tracking.</div>
                <div className="tech-stack">
                  <span className="tech-badge">Electron</span>
                  <span className="tech-badge">Node.js</span>
                  <span className="tech-badge">Claude AI</span>
                  <span className="tech-badge">JavaScript</span>
                  <span className="tech-badge">SQLite</span>
                </div>
                <div className="back-links">
                  <a href="#" className="btn-demo">&#9654; View Project</a>
                  <a href="https://github.com/sanjaysurya10" target="_blank" rel="noopener" className="btn-git">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 4: CARECOM / PROOF */}
          <div className="flip-wrapper card-green">
            <div className="flip-inner">
              <div className="flip-front">
                <div className="card-icon">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="13" fill="rgba(57,255,133,0.1)" stroke="#39ff85" strokeWidth="1.2" />
                    <line className="carecom-cross" x1="18" y1="10" x2="18" y2="26" stroke="#39ff85" strokeWidth="2.2"
                      strokeLinecap="round" />
                    <line className="carecom-cross" x1="10" y1="18" x2="26" y2="18" stroke="#39ff85" strokeWidth="2.2"
                      strokeLinecap="round" />
                    <circle cx="18" cy="18" r="3" fill="rgba(57,255,133,0.3)" stroke="#39ff85" strokeWidth="1" />
                    <circle className="dot-a" cx="10" cy="10" r="1.5" fill="#39ff85" opacity=".6" />
                    <circle className="dot-b" cx="26" cy="10" r="1.5" fill="#39ff85" opacity=".6" />
                    <circle className="dot-c" cx="10" cy="26" r="1.5" fill="#39ff85" opacity=".6" />
                    <circle cx="26" cy="26" r="1.5" fill="#39ff85" opacity=".6" />
                  </svg>
                  <span className="pulse-dot"></span>
                </div>
                <div className="card-meta">
                  <div className="card-tag">&#127942; Hackathon &middot; Claude AI</div>
                  <div className="card-title">CareCom / PROOF</div>
                  <div className="card-tagline">Anthropic Hackathon 2025 — AI tool empowering gig workers economically</div>
                </div>
                <div className="flip-hint">&#8635; hover to flip</div>
              </div>
              <div className="flip-back">
                <div className="card-title">CareCom / PROOF</div>
                <div className="card-desc">Built at the Anthropic Claude Hackathon 2025 — Group 17, Economic Empowerment &amp;
                  Education track. PROOF helps informal and gig workers build verifiable economic portfolios using Claude
                  AI to bridge financial access gaps. Shipped a working demo in under 24 hours.</div>
                <div className="tech-stack">
                  <span className="tech-badge">Claude API</span>
                  <span className="tech-badge">Python</span>
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">Anthropic</span>
                  <span className="tech-badge">AI Agents</span>
                </div>
                <div className="back-links">
                  <a href="#" className="btn-demo">&#9654; View Project</a>
                  <a href="https://github.com/sanjaysurya10" target="_blank" rel="noopener" className="btn-git">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CARD: SPORT MATE */}
          <div className="flip-wrapper card-cyan">
            <div className="flip-inner">
              <div className="flip-front">
                <div className="card-icon">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="8" width="28" height="20" rx="3" fill="rgba(0,245,255,0.1)" stroke="#00f5ff" strokeWidth="1.2" />
                    <line x1="18" y1="8" x2="18" y2="28" stroke="#00f5ff" strokeWidth="1" />
                    <circle cx="18" cy="18" r="4" fill="rgba(0,245,255,0.15)" stroke="#00f5ff" strokeWidth="1" />
                    <rect x="4" y="14" width="4" height="8" fill="none" stroke="#00f5ff" strokeWidth="1" />
                    <rect x="28" y="14" width="4" height="8" fill="none" stroke="#00f5ff" strokeWidth="1" />
                    <circle className="dot-a" cx="11" cy="12" r="1.2" fill="#00f5ff" />
                    <circle className="dot-b" cx="25" cy="24" r="1.2" fill="#00f5ff" />
                    <circle className="dot-c" cx="25" cy="12" r="1.2" fill="#00f5ff" />
                  </svg>
                  <span className="pulse-dot"></span>
                </div>
                <div className="card-meta">
                  <div className="card-tag">Full Stack &middot; Booking</div>
                  <div className="card-title">Sport Mate</div>
                  <div className="tech-stack">
                  <span className="tech-badge">Next.js 14</span>
                  <span className="tech-badge">TypeScript</span>
                  <span className="tech-badge">Node.js</span>
                  <span className="tech-badge">MongoDB</span>
                  <span className="tech-badge">Docker</span>
                  </div>
                </div>
                <div className="flip-hint">&#8635; hover to flip</div>
              </div>
              <div className="flip-back">
                <div className="card-title">Sport Mate</div>
                <div className="card-desc">A full-stack sports venue booking platform with a 3-role system (Player, Owner, Admin). Features JWT auth, real-time slot conflict prevention, email notifications, weather API per venue, and an admin dashboard.</div>
                <div className="back-links">
                  <a href="https://github.com/sanjaysurya10/Sport-Mate" target="_blank" rel="noopener" className="btn-git">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CARD: VOXYFLOO */}
          <div className="flip-wrapper card-purple">
            <div className="flip-inner">
              <div className="flip-front">
                <div className="card-icon">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 9h22a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H16l-6 5v-5H7a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3z" fill="rgba(191,95,255,0.12)" stroke="#bf5fff" strokeWidth="1.2" strokeLinejoin="round" />
                    <rect className="wave-bar-1" x="10" y="16" width="2.5" height="4" rx="1.2" fill="#bf5fff" opacity=".7" transformOrigin="11.25 18" />
                    <rect className="wave-bar-2" x="14.5" y="14" width="2.5" height="8" rx="1.2" fill="#bf5fff" opacity=".8" transformOrigin="15.75 18" />
                    <rect className="wave-bar-3" x="19" y="14" width="2.5" height="8" rx="1.2" fill="#bf5fff" opacity=".8" transformOrigin="20.25 18" />
                    <rect className="wave-bar-4" x="23.5" y="16" width="2.5" height="4" rx="1.2" fill="#bf5fff" opacity=".7" transformOrigin="24.75 18" />
                  </svg>
                  <span className="pulse-dot"></span>
                </div>
                <div className="card-meta">
                  <div className="card-tag">AI &middot; Voice</div>
                  <div className="card-title">Voxyfloo</div>
                  <div className="tech-stack">
                  <span className="tech-badge">Python</span>
                  <span className="tech-badge">NLP</span>
                  <span className="tech-badge">Voice Recognition</span>
                  </div>
                </div>
                <div className="flip-hint">&#8635; hover to flip</div>
              </div>
              <div className="flip-back">
                <div className="card-title">Voxyfloo</div>
                <div className="card-desc">An AI-powered chatbot with natural language processing and voice assistance for real-time conversational interaction.</div>
                <div className="back-links">
                  <a href="https://github.com/sanjaysurya10" target="_blank" rel="noopener" className="btn-git">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CARD: AUTOAPPLY AI */}
          <div className="flip-wrapper card-amber">
            <div className="flip-inner">
              <div className="flip-front">
                <div className="card-icon">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="5" width="20" height="26" rx="3" fill="rgba(255,184,48,0.12)" stroke="#ffb830" strokeWidth="1.2" />
                    <rect x="12" y="10" width="12" height="2" rx="1" fill="rgba(255,184,48,0.5)" />
                    <rect x="12" y="15" width="9" height="2" rx="1" fill="rgba(255,184,48,0.3)" />
                    <rect x="12" y="20" width="11" height="2" rx="1" fill="rgba(255,184,48,0.3)" />
                    <path d="M22 27l2.5 2.5L30 24" stroke="#ffb830" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    <circle className="dot-a" cx="13" cy="26" r="1.2" fill="#ffb830" />
                    <circle className="dot-b" cx="16.5" cy="26" r="1.2" fill="#ffb830" />
                    <circle className="dot-c" cx="20" cy="26" r="1.2" fill="#ffb830" />
                  </svg>
                  <span className="pulse-dot"></span>
                </div>
                <div className="card-meta">
                  <div className="card-tag">AI &middot; Automation</div>
                  <div className="card-title">AutoApply AI</div>
                  <div className="tech-stack">
                  <span className="tech-badge">Python</span>
                  <span className="tech-badge">Automation</span>
                  <span className="tech-badge">AI</span>
                  </div>
                </div>
                <div className="flip-hint">&#8635; hover to flip</div>
              </div>
              <div className="flip-back">
                <div className="card-title">AutoApply AI</div>
                <div className="card-desc">An intelligent job application automation tool that streamlines the job search and application process using AI.</div>
                <div className="back-links">
                  <a href="https://github.com/sanjaysurya10" target="_blank" rel="noopener" className="btn-git">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>{/* /flip-grid */}

        {/* ALL PROJECTS LABEL */}
        <div className="section-sub">All Projects</div>

        <div className="other-grid">

          <div className="other-card">
            <div className="other-header">
              <span className="other-icon">🗂️</span>
              <span className="other-status status-done">Completed</span>
            </div>
            <div className="other-title">Attendance Management System</div>
            <div className="other-desc">Full-featured employee attendance tracker. Supports CRUD operations, login system, and
              report generation. Reduced report generation time from 10 min to under 1 min.</div>
            <div className="other-footer">
              <div className="other-stack">
                <span className="other-badge">Java</span>
                <span className="other-badge">Spring Boot</span>
                <span className="other-badge">MySQL</span>
              </div>
              <a href="https://github.com/sanjaysurya10" target="_blank" rel="noopener" className="other-git">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>

          <div className="other-card">
            <div className="other-header">
              <span className="other-icon">📊</span>
              <span className="other-status status-done">Completed</span>
            </div>
            <div className="other-title">Real Estate Price Forecasting</div>
            <div className="other-desc">ML pipeline predicting property prices using regression models on 2,000+ records.
              Achieved 88% prediction accuracy. Deployed via a Postman-tested REST API.</div>
            <div className="other-footer">
              <div className="other-stack">
                <span className="other-badge">Python</span>
                <span className="other-badge">Scikit-learn</span>
                <span className="other-badge">Pandas</span>
                <span className="other-badge">REST API</span>
              </div>
              <a href="https://github.com/sanjaysurya10" target="_blank" rel="noopener" className="other-git">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>

          <div className="other-card">
            <div className="other-header">
              <span className="other-icon">🏢</span>
              <span className="other-status status-done">Completed</span>
            </div>
            <div className="other-title">Employee Management System</div>
            <div className="other-desc">Desktop CRUD application for managing organisational employee data. Java Swing GUI
              with MySQL backend — full add, update, delete, and view workflow.</div>
            <div className="other-footer">
              <div className="other-stack">
                <span className="other-badge">Java</span>
                <span className="other-badge">Swing</span>
                <span className="other-badge">MySQL</span>
              </div>
              <a href="https://github.com/sanjaysurya10" target="_blank" rel="noopener" className="other-git">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>

          <div className="other-card">
            <div className="other-header">
              <span className="other-icon">⚽</span>
              <span className="other-status status-wip">In Progress</span>
            </div>
            <div className="other-title">Sports-Mate</div>
            <div className="other-desc">Sports venue and tournament management platform. Features venue booking, game
              scheduling, coach management, and role-based dashboards (player / owner / admin).</div>
            <div className="other-footer">
              <div className="other-stack">
                <span className="other-badge">Next.js 15</span>
                <span className="other-badge">TypeScript</span>
                <span className="other-badge">Tailwind</span>
              </div>
              <a href="https://github.com/sanjaysurya10" target="_blank" rel="noopener" className="other-git">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>

        </div>{/* /other-grid */}

        {/* CTA */}
        <div className="projects-cta">
          <h3>Let's build something together</h3>
          <Link className="btn-contact-cta" href="/contact">Contact me</Link>
        </div>

      </div>

      <ProjectsEffects />
    </div>
  );
}
