import type { CSSProperties } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Resume" };

// Equivalent of the legacy inline `color:#64c8ff!important` — React style objects cannot carry !important,
// so override the variable Bootstrap's `.text-primary !important` rule reads instead.
const HEADING_STYLE = { "--bs-primary-rgb": "100, 200, 255" } as CSSProperties;

export default function ResumePage(): JSX.Element {
  return (
    <div className="container px-5 my-5">
        <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Resume</span></h1>
        </div>
        <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
                {/* Education Section*/}
                <section>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h2 className="text-primary fw-bolder mb-0" style={HEADING_STYLE}>Education</h2>
                        {/* Download resume button*/}
                        <a className="btn btn-primary px-4 py-3" href="/assets/Sanjay_JPMorgan_AIML_Resume_compressed.pdf"
                            download>
                            <div className="d-inline-block bi bi-download me-2"></div>
                            Download Resume
                        </a>
                    </div>
                    {/* Education Card 1 - MSc*/}
                    <div className="card glass-card shadow border-0 rounded-4 mb-5">
                        <div className="card-body p-5">
                            <div className="row align-items-center gx-5">
                                <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                    <div className="glass-label p-4">
                                        <div className="text-primary fw-bolder mb-2">2025 – 2026</div>
                                        <div className="small fw-bolder">Maynooth University</div>
                                        <div className="small text-muted">MSc Data Science &amp; Analytics</div>
                                        <div className="small text-muted">Dublin, Ireland</div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div>Pursuing my postgraduate degree in Data Science and Analytics at Maynooth
                                        University. Modules include Statistical Machine Learning, Spatial Data
                                        Analytics, AI Applications, and Data Visualisation. Dissertation on
                                        Speech-to-Text Deep Learning supervised by Dr. Cong Wang.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Education Card 2 - BE*/}
                    <div className="card glass-card shadow border-0 rounded-4 mb-5">
                        <div className="card-body p-5">
                            <div className="row align-items-center gx-5">
                                <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                    <div className="glass-label p-4">
                                        <div className="text-primary fw-bolder mb-2">2020 – 2024</div>
                                        <div className="small fw-bolder">Anna University</div>
                                        <div className="small text-muted">BE/Computer Science</div>
                                        <div className="small text-muted">Chennai, IN</div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div>Pursued my UnderGraduate degree in computer science and engineering, secured an
                                        overall CGPA of <strong>7.96</strong> and developed interest in the field of
                                        data analytics and web development.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Education Card 3 - Schooling*/}
                    <div className="card glass-card shadow border-0 rounded-4 mb-5">
                        <div className="card-body p-5">
                            <div className="row align-items-center gx-5">
                                <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                    <div className="glass-label p-4">
                                        <div className="text-primary fw-bolder mb-2">Schooling</div>
                                        <div className="small fw-bolder">Velammal Vidyalaya</div>
                                        <div className="small text-muted">Secondary and Higher Secondary</div>
                                        <div className="small text-muted">Chennai, IN.</div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div>
                                        Completed my schooling under the CBSE curriculum, securing an overall percentage
                                        of <strong>79%</strong> in Secondary (10th) and <strong>70%</strong> in Higher
                                        Secondary (12th).
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience Section*/}
                <section>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h2 className="text-primary fw-bolder mb-0" style={HEADING_STYLE}>Experience</h2>
                        {/* Certificate button*/}
                        <a className="btn btn-primary px-4 py-3" href="/assets/Certificate.pdf">
                            <div className="d-inline-block bi bi-download me-2"></div>
                            Certificate
                        </a>
                    </div>
                    {/* Experience Card 1*/}
                    <div className="card glass-card shadow border-0 rounded-4 mb-5">
                        <div className="card-body p-5">
                            <div className="row align-items-center gx-5">
                                <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                    <div className="glass-label p-4">
                                        <div className="text-secondary fw-bolder mb-2">Data Science Intern</div>
                                        <div className="mb-2">
                                            <div className="small fw-bolder">Mindenious</div>
                                            <div className="small text-muted">Powered by <strong>WIPRO</strong></div>
                                        </div>
                                        <div className="fst-italic">
                                            <div className="small text-muted">Dec 2024 – Aug 2025</div>
                                            <div className="small text-muted">Bengaluru, IN</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div>Developed and evaluated ML models for predictive analytics on 10,000+ record
                                        datasets using Python (Pandas, NumPy, Scikit-learn), improving model performance
                                        by 20% through iterative feature engineering and hyperparameter tuning. Built
                                        reusable Python scripts for data processing and experimentation workflows.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Experience Card 2*/}
                    <div className="card glass-card shadow border-0 rounded-4 mb-5">
                        <div className="card-body p-5">
                            <div className="row align-items-center gx-5">
                                <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                    <div className="glass-label p-4">
                                        <div className="text-secondary fw-bolder mb-2">Data Analytics Intern</div>
                                        <div className="mb-2">
                                            <div className="small fw-bolder">Sutherland Global Services</div>
                                            <div className="small text-muted">Data handling &amp; customer support</div>
                                        </div>
                                        <div className="fst-italic">
                                            <div className="small text-muted">Oct 2024 – Jul 2025</div>
                                            <div className="small text-muted">Chennai, IN</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div>Analysed client interaction data to identify workflow inefficiencies,
                                        contributing to a 25% reduction in response times while maintaining SLA
                                        compliance. Enhanced analytical thinking in high-volume production environments.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Skills Section*/}
                <section>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h2 className="text-primary fw-bolder mb-0" style={HEADING_STYLE}>Skills</h2>
                    </div>
                    <div className="card glass-card shadow border-0 rounded-4 mb-5">
                        <div className="card-body p-5">
                            <div className="mb-5">
                                <div className="d-flex align-items-center mb-4">
                                    <div
                                        className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                        <i className="bi bi-code-slash"></i>
                                    </div>
                                    <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Languages</span></h3>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3 mb-4">
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Python</div>
                                    </div>
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Java</div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">JavaScript</div>
                                    </div>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3">
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">TypeScript</div>
                                    </div>
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">SQL</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5">
                                <div className="d-flex align-items-center mb-4">
                                    <div
                                        className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                        <i className="bi bi-layers"></i>
                                    </div>
                                    <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Frameworks</span></h3>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3 mb-4">
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Spring Boot</div>
                                    </div>
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Next.js</div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">React</div>
                                    </div>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3">
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Node.js</div>
                                    </div>
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Express</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5">
                                <div className="d-flex align-items-center mb-4">
                                    <div
                                        className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                        <i className="bi bi-tools"></i>
                                    </div>
                                    <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Tools</span></h3>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3 mb-4">
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Docker</div>
                                    </div>
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Git</div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">GitLab CI/CD</div>
                                    </div>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3">
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Supabase</div>
                                    </div>
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">MongoDB</div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">MySQL</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5">
                                <div className="d-flex align-items-center mb-4">
                                    <div
                                        className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                        <i className="bi bi-cpu"></i>
                                    </div>
                                    <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Other</span></h3>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3 mb-4">
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">REST APIs</div>
                                    </div>
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">JWT Auth</div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Thymeleaf</div>
                                    </div>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3">
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Maven</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Divider*/}
                <div className="pb-5"></div>
                {/* Skills Section*/}
                <section>
                    {/* Skillset Card*/}
                    <div className="card glass-card shadow border-0 rounded-4 mb-5">
                        <div className="card-body p-5">
                            {/* Tools list*/}
                            <div className="mb-5">
                                <div className="d-flex align-items-center mb-4">
                                    <div
                                        className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                        <i className="bi bi-tools"></i>
                                    </div>
                                    <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Tools</span></h3>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3 mb-4">
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Git</div>
                                    </div>
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">GitHub</div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">MySQL</div>
                                    </div>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3 mb-4">
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">MongoDB</div>
                                    </div>
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Jupyter Notebook</div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Anaconda</div>
                                    </div>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3">
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Postman</div>
                                    </div>
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">VS Code</div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">IntelliJ IDEA</div>
                                    </div>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3 mt-4">
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Electron</div>
                                    </div>
                                </div>
                            </div>
                            {/* Languages list*/}
                            <div className="mb-5">
                                <div className="d-flex align-items-center mb-4">
                                    <div
                                        className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                        <i className="bi bi-code-slash"></i>
                                    </div>
                                    <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Languages</span>
                                    </h3>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3 mb-4">
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Python</div>
                                    </div>
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Java</div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">JavaScript</div>
                                    </div>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3">
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">SQL</div>
                                    </div>
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">R</div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Ruby</div>
                                    </div>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3 mt-4">
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">HTML</div>
                                    </div>
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">CSS</div>
                                    </div>
                                </div>
                            </div>
                            {/* Skills list*/}
                            <div className="mb-5">
                                <div className="d-flex align-items-center mb-4">
                                    <div
                                        className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                        <i className="bi bi-cpu"></i>
                                    </div>
                                    <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Skills</span></h3>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3 mb-4">
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Spring Boot</div>
                                    </div>
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">ReactJS</div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Node.js</div>
                                    </div>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3 mb-4">
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Express.js</div>
                                    </div>
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Bootstrap</div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Pandas</div>
                                    </div>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3 mb-4">
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">NumPy</div>
                                    </div>
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Scikit-learn</div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">NLTK</div>
                                    </div>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3 mb-4">
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">PyTorch</div>
                                    </div>
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">NLP</div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Speech Recognition</div>
                                    </div>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3 mb-4">
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Deep Learning</div>
                                    </div>
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Machine Learning</div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Regression Analysis</div>
                                    </div>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3 mb-4">
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Data Cleaning</div>
                                    </div>
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Data Visualisation</div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Streamlit</div>
                                    </div>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3 mb-4">
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">REST APIs</div>
                                    </div>
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">JWT Authentication</div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">OTP Systems</div>
                                    </div>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3">
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">CRUD Applications</div>
                                    </div>
                                    <div className="col mb-4 mb-md-0">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">MCP Integration</div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex align-items-center glass-label rounded-4 p-3 h-100">Claude API</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
  );
}
