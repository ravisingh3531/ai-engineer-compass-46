import { createFileRoute, redirect } from "@tanstack/react-router";

// The article is published at "/". This slug is kept as a stable entry point
// and redirects to the canonical URL.
export const Route = createFileRoute("/ai-courses-in-india-to-become-an-ai-engineer")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
