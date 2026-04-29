import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader2, ArrowRight } from "lucide-react";

// Relative path so the same code works on:
//   • Vercel       → handled by /api/waitlist.js serverless function
//   • Local/preview → routed via Kubernetes ingress to the FastAPI backend
const WAITLIST_URL = "/api/waitlist";

export default function WaitlistForm({ variant = "inline", testidPrefix = "waitlist" }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await axios.post(WAITLIST_URL, {
        email,
        name: name || undefined,
        source: variant === "card" ? "final_cta" : "hero",
      });
      toast.success(res.data?.message || "You're on the list.", {
        description: "We'll be in touch — calmly.",
      });
      setEmail("");
      setName("");
    } catch (err) {
      const detail =
        err?.response?.data?.detail ||
        "Something went sideways. Try again in a moment.";
      toast.error(typeof detail === "string" ? detail : "Please check your email.");
    } finally {
      setLoading(false);
    }
  };

  if (variant === "card") {
    return (
      <form
        onSubmit={submit}
        data-testid={`${testidPrefix}-form-card`}
        className="w-full max-w-xl flex flex-col gap-3"
      >
        <input
          data-testid={`${testidPrefix}-name-input`}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your first name (optional)"
          className="input-pill w-full"
        />
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            data-testid={`${testidPrefix}-email-input`}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@calm.inbox"
            className="input-pill flex-1"
          />
          <button
            data-testid={`${testidPrefix}-submit-btn`}
            type="submit"
            disabled={loading}
            className="btn-pill-primary disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Reserve my spot"}
            {!loading && <ArrowRight className="w-4 h-4" />}
          </button>
        </div>
        <p className="text-xs text-muted-foreground px-2">
          No spam, ever. Unsubscribe with one tap. We respect your inbox like our own.
        </p>
      </form>
    );
  }

  return (
    <form
      onSubmit={submit}
      data-testid={`${testidPrefix}-form-inline`}
      className="w-full max-w-md flex flex-col sm:flex-row gap-3"
    >
      <input
        data-testid={`${testidPrefix}-email-input`}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@calm.inbox"
        className="input-pill flex-1"
      />
      <button
        data-testid={`${testidPrefix}-submit-btn`}
        type="submit"
        disabled={loading}
        className="btn-pill-primary disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Join waitlist"}
        {!loading && <ArrowRight className="w-4 h-4" />}
      </button>
    </form>
  );
}
