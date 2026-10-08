"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Navbar(): JSX.Element {
  const pathname = usePathname();

  useEffect(() => {
    const collapseMenu = document.getElementById("navbarSupportedContent");
    if (collapseMenu?.classList.contains("show")) {
      collapseMenu.classList.remove("show");
      const toggler = document.querySelector<HTMLButtonElement>(".navbar-toggler");
      toggler?.classList.add("collapsed");
      toggler?.setAttribute("aria-expanded", "false");
    }
  }, [pathname]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent-gradient py-3">
      <div className="container px-5">
        <Link className="navbar-brand" href="/"><span className="fw-bolder text-dark">Sanjay Surya</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
            <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/resume">Resume</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/projects">Projects</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
