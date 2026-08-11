import type { BobaDrink } from "@/lib/drinks";

export function DrinkCard({ drink }: { drink: BobaDrink }) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-black/[.08] bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-white/[.1] dark:bg-zinc-900">
      <div className="aspect-square w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
        {drink.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={drink.imageUrl}
            alt={drink.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1 border-2 border-dashed border-zinc-300 text-zinc-400 dark:border-zinc-700 dark:text-zinc-600">
            <span className="text-3xl">🧋</span>
            <span className="text-xs font-medium">Photo coming soon</span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <span className="w-fit rounded-full bg-black/[.05] px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide text-zinc-600 dark:bg-white/[.08] dark:text-zinc-400">
          {drink.category}
        </span>
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          {drink.name}
        </h2>
        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {drink.description}
        </p>
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
          What&apos;s in it
        </h3>
        <ul className="flex flex-wrap gap-1.5">
          {drink.ingredients.map((ingredient) => (
            <li
              key={ingredient}
              className="rounded-full border border-black/[.08] px-2.5 py-0.5 text-xs text-zinc-600 dark:border-white/[.12] dark:text-zinc-400"
            >
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {drink.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-zinc-400 dark:text-zinc-600"
          >
            #{tag}
          </span>
        ))}
      </div>

      <a
        href={drink.shopUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-medium text-zinc-400 hover:text-zinc-600 hover:underline dark:text-zinc-600 dark:hover:text-zinc-400"
      >
        via {drink.shop}
      </a>
    </article>
  );
}
