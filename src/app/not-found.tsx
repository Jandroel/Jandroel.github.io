import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] py-24">
      <Container className="flex min-h-[50vh] items-center">
        <div className="max-w-2xl">
          <p className="jp-kicker text-sm text-[#ffb7a8]">error.code: 404</p>
          <h1 className="mt-4 text-4xl font-extrabold text-white">Page not found</h1>
          <p className="mt-4 text-base leading-7 text-[var(--text-muted)]">
            The route you opened does not exist in this portfolio.
          </p>
          <Button asChild className="mt-8">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </Container>
    </main>
  );
}
