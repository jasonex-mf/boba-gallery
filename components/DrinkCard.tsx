import Image from "next/image";
import type { BobaDrink } from "@/lib/drinks";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function DrinkCard({ drink }: { drink: BobaDrink }) {
  return (
    <Card className="gap-0 border-none bg-card/90 py-0 shadow-sm ring-1 ring-amber-900/8 transition-shadow hover:shadow-md hover:ring-amber-900/12">
      <div className="relative aspect-square w-full overflow-hidden bg-muted">
        {drink.imageUrl ? (
          <Image
            src={drink.imageUrl}
            alt={drink.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1 border-2 border-dashed border-muted-foreground/30 text-muted-foreground">
            <span className="text-3xl">🧋</span>
            <span className="text-xs font-medium">Photo coming soon</span>
          </div>
        )}
      </div>

      <CardContent className="flex flex-col gap-3 p-6">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-1.5">
            {drink.categories.map((category) => (
              <Badge
                key={category}
                variant="secondary"
                className="w-fit uppercase tracking-wide"
              >
                {category}
              </Badge>
            ))}
          </div>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            {drink.name}
          </h2>
          <p className="text-sm leading-6 text-muted-foreground">
            {drink.description}
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            What&apos;s in it
          </h3>
          <ul className="flex flex-wrap gap-1.5">
            {drink.ingredients.map((ingredient) => (
              <li key={ingredient}>
                <Badge variant="outline">{ingredient}</Badge>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {drink.tags.map((tag) => (
            <span key={tag} className="text-xs text-muted-foreground/70">
              #{tag}
            </span>
          ))}
        </div>

        <a
          href={drink.shopUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-muted-foreground/70 hover:text-foreground hover:underline"
        >
          via {drink.shop}
        </a>
      </CardContent>
    </Card>
  );
}
