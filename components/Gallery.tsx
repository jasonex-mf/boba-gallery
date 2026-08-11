"use client";

import { useState } from "react";
import type { BobaDrink, DrinkCategory } from "@/lib/drinks";
import { DrinkCard } from "@/components/DrinkCard";

export function Gallery({
  drinks,
  categories,
  shops,
}: {
  drinks: BobaDrink[];
  categories: DrinkCategory[];
  shops: string[];
}) {
  const [activeCategory, setActiveCategory] = useState<DrinkCategory | "All">(
    "All"
  );
  const [activeShop, setActiveShop] = useState<string>("All");
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredDrinks = drinks.filter((drink) => {
    if (activeCategory !== "All" && drink.category !== activeCategory) {
      return false;
    }
    if (activeShop !== "All" && drink.shop !== activeShop) {
      return false;
    }
    if (normalizedQuery) {
      const haystack = [
        drink.name,
        drink.description,
        drink.shop,
        ...drink.ingredients,
        ...drink.tags,
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(normalizedQuery)) {
        return false;
      }
    }
    return true;
  });

  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-full max-w-md">
          <svg
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400 dark:text-zinc-500"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <circle cx="9" cy="9" r="6" />
            <path d="M17 17 L13.5 13.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search drinks, ingredients, shops..."
            className="w-full rounded-full border border-black/[.08] bg-white py-2.5 pl-9 pr-4 text-sm text-zinc-900 placeholder:text-zinc-400 dark:border-white/[.145] dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {(["All", ...categories] as const).map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-foreground text-background"
                  : "border border-black/[.08] text-zinc-600 hover:bg-black/[.04] dark:border-white/[.145] dark:text-zinc-400 dark:hover:bg-white/[.06]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          Shop
          <select
            value={activeShop}
            onChange={(event) => setActiveShop(event.target.value)}
            className="rounded-full border border-black/[.08] bg-white px-3 py-1.5 text-sm text-zinc-900 dark:border-white/[.145] dark:bg-zinc-900 dark:text-zinc-50"
          >
            <option value="All">All shops</option>
            {shops.map((shop) => (
              <option key={shop} value={shop}>
                {shop}
              </option>
            ))}
          </select>
        </label>
      </div>

      {filteredDrinks.length === 0 ? (
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-500">
          No drinks match that filter yet.
        </p>
      ) : (
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDrinks.map((drink) => (
            <DrinkCard key={drink.id} drink={drink} />
          ))}
        </div>
      )}
    </div>
  );
}
