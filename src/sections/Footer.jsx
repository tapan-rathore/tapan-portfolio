
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-8 pt-6">
      <div className="flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="#top"
          className="text-lg font-bold tracking-tight"
          aria-label="Back to top"
        >
          T<span className="text-accent">.</span>
        </a>

        <p className="text-sm text-mute">
          Designed and built with React & Tailwind CSS.
        </p>

        <a
          href="#top"
          className="inline-flex items-center gap-2 text-sm font-medium text-mute transition-colors hover:text-accent"
        >
          Back to top
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
