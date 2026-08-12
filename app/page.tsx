import { CATEGORIES, DRINKS, SHOPS } from "@/lib/drinks";
import { Gallery } from "@/components/Gallery";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center bg-background font-sans">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
        {/* preview-style parchment wash */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/backgrounds/milk-tea-wash-bg.png)" }}
        />
        {/* light veil so drink cards stay readable */}
        <div className="absolute inset-0 bg-background/35 dark:bg-background/55" />
        {/* extra grain for parchment feel */}
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-multiply dark:opacity-[0.14] dark:mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <main className="relative z-10 flex w-full max-w-6xl flex-1 flex-col items-center gap-10 px-6 py-16 sm:px-10">
        <div className="flex w-full items-center justify-end">
          <ThemeToggle />
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground">
            Boba Gallery
          </h1>
          <p className="max-w-lg text-lg font-medium leading-7 text-foreground/80">
            A little menu of milk teas, fruit teas, and specialty drinks —
            browse by category and find your next order.
          </p>
        </div>

        <Gallery drinks={DRINKS} categories={CATEGORIES} shops={SHOPS} />
      </main>
    </div>
  );
}
