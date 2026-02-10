import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "../schema";

type SubmitState = "idle" | "submitting" | "success" | "error";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} style={{ margin: "6px 0 0", color: "#B91C1C", fontSize: 13 }}>
      {message}
    </p>
  );
}

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");

  const nameErrorId = useId();
  const emailErrorId = useId();
  const messageErrorId = useId();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
    mode: "onTouched",
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      setState("submitting");

      // Mock request (simulate latency)
      await new Promise((r) => setTimeout(r, 700));

      // In a real app, you'd POST values to an API endpoint here.
      console.log("Contact submit:", values);

      setState("success");
      reset();
    } catch {
      setState("error");
    }
  }

  const disabled = isSubmitting || state === "submitting";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: "grid", gap: 14 }}>
      {state === "success" && (
        <div
          role="status"
          style={{
            border: "1px solid #D1FAE5",
            background: "#ECFDF5",
            color: "#065F46",
            borderRadius: 12,
            padding: 12,
          }}
        >
          Message sent successfully.
        </div>
      )}

      {state === "error" && (
        <div
          role="alert"
          style={{
            border: "1px solid #FECACA",
            background: "#FEF2F2",
            color: "#991B1B",
            borderRadius: 12,
            padding: 12,
          }}
        >
          Something went wrong. Please try again.
        </div>
      )}

      <div>
        <label htmlFor="name" style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>
          Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          {...register("name")}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? nameErrorId : undefined}
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid #D1D5DB",
          }}
        />
        <FieldError id={nameErrorId} message={errors.name?.message} />
      </div>

      <div>
        <label htmlFor="email" style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          {...register("email")}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? emailErrorId : undefined}
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid #D1D5DB",
          }}
        />
        <FieldError id={emailErrorId} message={errors.email?.message} />
      </div>

      <div>
        <label htmlFor="message" style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          {...register("message")}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? messageErrorId : undefined}
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid #D1D5DB",
            resize: "vertical",
          }}
        />
        <FieldError id={messageErrorId} message={errors.message?.message} />
      </div>

      <button
        type="submit"
        disabled={disabled}
        style={{
          justifySelf: "start",
          padding: "10px 14px",
          borderRadius: 10,
          border: "1px solid #111827",
          background: disabled ? "#E5E7EB" : "#111827",
          color: disabled ? "#111827" : "#ffffff",
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        {disabled ? "Sending..." : "Send message"}
      </button>

      <p style={{ margin: 0, color: "#6B7280", fontSize: 13 }}>
        This form is a demo. Submissions are not sent to a real backend yet.
      </p>
    </form>
  );
}