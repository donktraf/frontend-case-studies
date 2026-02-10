import { ContactForm } from "../features/contact/components/ContactForm";

export function ContactPage() {
  return (
    <section>
      <header style={{ marginBottom: 16 }}>
        <h1 style={{ fontSize: 28, marginBottom: 8 }}>Contact</h1>
        <p style={{ color: "#374151", margin: 0 }}>
          Send a message. Validation, UX states and accessibility are implemented intentionally.
        </p>
      </header>

      <div style={{ maxWidth: 560 }}>
        <ContactForm />
      </div>
    </section>
  );
}