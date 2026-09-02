import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import "./Contact.css";

const topics = ["General question", "Sales", "Support", "Partnership"];

const infoCards = [
  {
    icon: "user",
    title: "Call us",
    lines: ["+91 12345 67890", "+1 415 555 0135"],
  },
  {
    icon: "check",
    title: "Email us",
    lines: ["sales@oberoitech.example", "support@oberoitech.example"],
  },
  {
    icon: "shield",
    title: "Support hours",
    lines: ["24/6 — Monday to Saturday", "Average first response under 3 hours"],
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", topic: topics[0], message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container contact-hero-inner">
          <div className="kicker" style={{ justifyContent: "center" }}>
            Get in touch
          </div>
          <h1>We'd love to hear from you</h1>
          <p>
            Questions about an extension, a custom build, or just not sure where to start? Send us a
            message and a real person on our team will get back to you.
          </p>
        </div>
      </div>

      <div className="container contact-layout">
        <div className="contact-form-panel card">
          {sent ? (
            <div className="contact-success">
              <div className="contact-success-icon">
                <Icon name="check" size={26} />
              </div>
              <h2>Message sent</h2>
              <p>
                Thanks, {form.name.split(" ")[0] || "there"} — we've got your message and will reply to{" "}
                <strong>{form.email}</strong> shortly.
              </p>
              <button className="btn btn-outline" onClick={() => setSent(false)}>
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@store.com"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="topic">What's this about?</label>
                <select id="topic" name="topic" value={form.topic} onChange={handleChange}>
                  {topics.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us a bit about what you need…"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Send message <Icon name="arrowRight" size={16} />
              </button>
              <p className="contact-form-hint">We typically reply within one business day.</p>
            </form>
          )}
        </div>

        <aside className="contact-sidebar">
          {infoCards.map((c) => (
            <div key={c.title} className="contact-info-card">
              <div className="contact-info-icon">
                <Icon name={c.icon} size={18} />
              </div>
              <div>
                <h3>{c.title}</h3>
                {c.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          ))}

          <div className="contact-links-card">
            <h3>Looking for something else?</h3>
            <Link to="/services">
              Hire our development team <Icon name="arrowRight" size={13} />
            </Link>
            <Link to="/pricing">
              Compare support plans <Icon name="arrowRight" size={13} />
            </Link>
            <Link to="/blog">
              Read the blog <Icon name="arrowRight" size={13} />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
