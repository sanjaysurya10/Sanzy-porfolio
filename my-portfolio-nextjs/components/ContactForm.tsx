"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";

type SubmitStatus = "idle" | "success" | "error";

interface ContactResponse {
  success: boolean;
}

export default function ContactForm(): JSX.Element {
  const formRef = useRef<HTMLFormElement>(null);
  const [isValidated, setIsValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    setSubmitStatus("idle");

    if (!form.checkValidity()) {
      setIsValidated(true);
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data: ContactResponse = await response.json();
        if (data.success) {
          setSubmitStatus("success");
          formRef.current?.reset();
          setIsValidated(false);
        } else {
          setSubmitStatus("error");
        }
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-5">
      <div className="container px-5">
        {/* Contact form*/}
        <div className="glass-panel py-5 px-4 px-md-5">
          <div className="text-center mb-5">
            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
            <h1 className="fw-bolder">Get in touch</h1>
            <p className="lead fw-normal text-muted mb-0">sanjaysurya386@gmail.com</p>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <form id="contactForm" ref={formRef} noValidate className={isValidated ? "was-validated" : undefined} onSubmit={handleSubmit}>
                {/* Name input*/}
                <div className="form-floating mb-3">
                  <input className="form-control" id="name" name="name" type="text" placeholder="Enter your name..." required />
                  <label htmlFor="name">Full name</label>
                  <div className="invalid-feedback">A name is required.</div>
                </div>
                {/* Email address input*/}
                <div className="form-floating mb-3">
                  <input className="form-control" id="email" name="email" type="email" placeholder="name@example.com" required />
                  <label htmlFor="email">Email address</label>
                  <div className="invalid-feedback">A valid email is required.</div>
                </div>
                {/* Message input*/}
                <div className="form-floating mb-3">
                  <textarea className="form-control" id="message" name="message" placeholder="Enter your message here..." style={{ height: "10rem" }} required></textarea>
                  <label htmlFor="message">Message</label>
                  <div className="invalid-feedback">A message is required.</div>
                </div>
                {/* Submit success message*/}
                <div className={submitStatus === "success" ? undefined : "d-none"} id="submitSuccessMessage">
                  <div className="text-center mb-3" style={{ color: "#64c8ff", fontWeight: 600 }}>
                    Message sent! I&apos;ll get back to you soon.
                  </div>
                </div>
                {/* Submit error message*/}
                <div className={submitStatus === "error" ? undefined : "d-none"} id="submitErrorMessage">
                  <div className="text-center mb-3" style={{ color: "#ff9090" }}>Error sending message! Please email me directly at sanjaysurya386@gmail.com</div>
                </div>
                {/* Submit Button*/}
                <div className="d-grid"><button className="btn btn-primary btn-lg" id="submitButton" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Submit"}</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
