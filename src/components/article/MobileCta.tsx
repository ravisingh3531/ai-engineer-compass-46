export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 px-4 py-2.5 backdrop-blur-md md:hidden">
      <div className="flex items-center gap-3">
        <a
          href="https://logicmojo.com/artificial-intelligence-machine-learning-course"
          className="flex-1 rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground no-underline shadow-editorial"
        >
          Explore the AI &amp; ML course →
        </a>
        <a
          href="#quiz"
          className="rounded-xl border border-accent/40 bg-card px-3 py-2.5 text-sm font-semibold text-primary no-underline"
        >
          Quiz
        </a>
      </div>
    </div>
  );
}

export function StickyDesktopCta() {
  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-40 hidden md:block">
      <a
        href="https://logicmojo.com/artificial-intelligence-machine-learning-course"
        className="pointer-events-auto inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-primary-foreground no-underline shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
      >
        LogicMojo AI &amp; ML Course
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}
