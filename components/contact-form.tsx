"use client";

import { FormEvent, useState } from "react";

type FormVariant = "business" | "join";
type SubmitState = "idle" | "submitting" | "success" | "error";

const formContent = {
  business: {
    submitLabel: "Send collaboration inquiry",
    subjectLabel: "Purpose",
    subjectName: "purpose",
    options: [
      "Research collaboration",
      "Data partnership",
      "Technology partnership",
      "Consulting inquiry",
    ],
  },
  join: {
    submitLabel: "Send expression of interest",
    subjectLabel: "Interest area",
    subjectName: "interestArea",
    options: [
      "Quantitative research",
      "Quant development",
      "Financial data / machine learning",
      "Student collaboration",
      "Other",
    ],
  },
} as const;

export function ContactForm({ variant }: { variant: FormVariant }) {
  const [state, setState] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState("");
  const content = formContent[variant];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setFeedback("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, formType: variant }),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Your message could not be sent.");
      }

      form.reset();
      setState("success");
      setFeedback("Thank you. Your message has been sent to Alpha X Quant.");
    } catch (error) {
      setState("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Your message could not be sent. Please try again.",
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid two-column">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" maxLength={100} required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" maxLength={160} required />
        </label>
      </div>

      {variant === "business" ? (
        <label>
          <span>
            Company <em>Optional</em>
          </span>
          <input name="company" type="text" autoComplete="organization" maxLength={120} />
        </label>
      ) : (
        <label>
          <span>Background</span>
          <input
            name="background"
            type="text"
            placeholder="e.g. researcher, developer, graduate student"
            maxLength={180}
            required
          />
        </label>
      )}

      <label>
        <span>{content.subjectLabel}</span>
        <select name={content.subjectName} defaultValue="" required>
          <option value="" disabled>
            Select one
          </option>
          {content.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>Message</span>
        <textarea name="message" rows={6} minLength={20} maxLength={5000} required />
      </label>

      <label className="honeypot" aria-hidden="true">
        <span>Website</span>
        <input name="website" type="text" autoComplete="off" tabIndex={-1} />
      </label>

      <div className="form-submit-row">
        <button className="button button-primary" type="submit" disabled={state === "submitting"}>
          {state === "submitting" ? "Sending…" : content.submitLabel}
          {state !== "submitting" && <span aria-hidden="true">→</span>}
        </button>
        <p className="form-note">Submitted securely. Your information is used only to respond.</p>
      </div>
      <p
        className={`form-feedback ${state === "error" ? "is-error" : ""}`}
        role="status"
        aria-live="polite"
      >
        {feedback}
      </p>
    </form>
  );
}
