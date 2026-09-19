import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[100svh] flex flex-col items-center justify-center text-center px-6">
      <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
        404
      </p>
      <h1 className="mt-4 text-4xl md:text-6xl font-medium tracking-tight">
        Page not found
      </h1>
      <p className="mt-4 text-muted-foreground max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium"
      >
        Back to Home
      </Link>
    </main>
  );
}
