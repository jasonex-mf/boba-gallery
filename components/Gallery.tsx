"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import type { BobaDrink, DrinkCategory } from "@/lib/drinks";
import { DrinkCard } from "@/components/DrinkCard";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

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
    if (
      activeCategory !== "All" &&
      !drink.categories.includes(activeCategory)
    ) {
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

  const shopGroups = shops
    .map((shop) => ({
      shop,
      drinks: filteredDrinks.filter((drink) => drink.shop === shop),
    }))
    .filter((group) => group.drinks.length > 0);

  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-full max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search drinks, ingredients, shops..."
            className="rounded-full pl-9"
          />
        </div>

        <Tabs
          value={activeCategory}
          onValueChange={(value) =>
            setActiveCategory(value as DrinkCategory | "All")
          }
        >
          <TabsList className="flex-wrap justify-center bg-transparent p-0 gap-2 h-auto text-foreground">
            {(["All", ...categories] as const).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="rounded-full border border-foreground/25 bg-card/80 px-4 py-1.5 font-semibold text-foreground hover:bg-card hover:text-foreground data-active:bg-foreground data-active:text-background data-active:shadow-none dark:border-foreground/30 dark:data-active:bg-foreground dark:data-active:text-background"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <label className="flex items-center gap-2 text-sm font-medium text-foreground/80">
          Shop
          <Select
            value={activeShop}
            onValueChange={(value) => setActiveShop(value ?? "All")}
          >
            <SelectTrigger className="rounded-full font-medium text-foreground">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All shops</SelectItem>
              {shops.map((shop) => (
                <SelectItem key={shop} value={shop}>
                  {shop}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </label>
      </div>

      {shopGroups.length === 0 ? (
        <p className="text-center text-sm text-muted-foreground">
          No drinks match that filter yet.
        </p>
      ) : (
        <div className="flex w-full flex-col gap-12">
          {shopGroups.map(({ shop, drinks: shopDrinks }) => (
            <section key={shop} className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <div className="flex items-baseline gap-3">
                  <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
                    {shop}
                  </h2>
                  <span className="text-sm font-medium text-foreground/70">
                    {shopDrinks.length}{" "}
                    {shopDrinks.length === 1 ? "drink" : "drinks"}
                  </span>
                </div>
                <Separator />
              </div>

              <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {shopDrinks.map((drink) => (
                  <DrinkCard key={drink.id} drink={drink} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
