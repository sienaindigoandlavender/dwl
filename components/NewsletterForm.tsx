"use client";

import { useState } from "react";

type State = "idle" | "submitting" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setState("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setState("error");
        setMessage(data.error ?? "Something went wrong.");
        return;
      }
      setState("success");
      setMessage("Subscribed. We'll write when there's something to say.");
      setEmail("");
    } catch {
      setState("error");
      setMessage("Network error. Try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <div className="flex items-center gap-0 border-b border-white/30 focus-within:border-white transition-colors">
        <input
          type="email"
          required
          aria-label="Email address"
          placeholder="you@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-transparent py-2 mono text-sm text-white placeholder:text-white/40 outline-none"
        />
        <button
          type="submit"
          disabled={state === "submitting"}
          className="mono uppercase-micro text-white/80 hover:text-white px-2 py-2 disabled:opacity-50"
        >
          {state === "submitting" ? "…" : "Subscribe"}
        </button>
      </div>
      {message && (
        <p
          role="status"
          className={`mono text-xs ${state === "error" ? "text-red-300" : "text-white/70"}`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
