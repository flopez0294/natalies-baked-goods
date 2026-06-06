"use client";

import ImageWithFallback from "next/image";
import { Wheat, Coffee, Cake, Heart, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import Link from "next/link";

const smoothScrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/20 to-background" />

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-5xl sm:max-w-6xl lg:max-w-7xl xl:max-w-[90rem] 2xl:max-w-[100rem]">
            <div className="grid items-center gap-10 lg:gap-16 xl:gap-24 lg:grid-cols-2">

              {/* Left */}
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium">
                  <Heart className="mr-2 h-4 w-4" />
                  Baked with Love Since 2026
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  Nalalie's Baked Goods
                </h1>

                <p className="max-w-prose text-lg leading-relaxed text-foreground/80">
                  Experience the warmth of homemade goodness. Every loaf and pastry is
                  crafted with care using traditional recipes and the finest ingredients.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Button size="lg" onClick={(e) => smoothScrollTo("menu")}>
                    View Menu
                  </Button>
                  <Button size="lg" variant="outline" onClick={(e) => smoothScrollTo("about")}>
                    Our Story
                  </Button>
                </div>
              </div>

              {/* Right */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-primary/10 blur-2xl" />

                <ImageWithFallback
                  src="/images/tommaso-urli-hzScL4ufC6k-unsplash.jpg"
                  alt="Fresh artisan bread"
                  width={1080}
                  height={720}
                  priority
                  className="relative w-full h-[240px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[480px] rounded-2xl object-cover shadow-2xl"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24" id="menu">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 xl:px-12">

          {/* Title */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Featured Baked Goods
            </h2>
            <p className="mt-2 text-foreground/70">
              Freshly made favorites from our oven
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            
            <Card
              title="Sourdough Bread"
              description="Naturally fermented with a crisp crust and soft airy center."
              price="$6.50"
              image="/images/vicky-ng-JlwXPO7DStM-unsplash.jpg"
              badge="Best Seller"
            />

            <Card
              title="Chocolate Croissant"
              description="Buttery layers filled with rich melted chocolate."
              price="$4.25"
              image="/images/dan-burton-bIyRC9uuPt0-unsplash.jpg"
              badge="Fresh Today"
            />

            <Card
              title="Blueberry Muffin"
              description="Soft muffin packed with juicy blueberries and a golden top."
              price="$3.75"
              image="/images/debbie-widjaja-H_PXix_4Bwc-unsplash.jpg"
              badge="Popular"
            />

            <Card
              title="Cinnamon Roll"
              description="Sweet and gooey with a swirl of cinnamon and cream cheese icing."
              price="$4.50"
              image="/images/sergio-arze-wJLGRhZsn5w-unsplash.jpg"
              badge="New"
            />

          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="relative overflow-hidden py-24" id="about">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10 xl:px-12">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* IMAGE SIDE (bigger on large screens) */}
            <div className="relative lg:-ml-6 xl:-ml-12">
              <div className="absolute -inset-6 rounded-2xl bg-primary/10 blur-2xl" />

              <div className="relative w-full overflow-hidden rounded-2xl
                              h-[280px] sm:h-[360px] md:h-[420px]
                              lg:h-[520px] xl:h-[600px]">

                <ImageWithFallback
                  src="/images/adam-bartoszewicz-AYLSwAtdb90-unsplash.jpg"
                  alt="Bakery interior"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* CONTENT SIDE */}
            <div className="space-y-6 lg:pl-6 xl:pl-10">

              <div className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium">
                <Heart className="mr-2 h-4 w-4" />
                A Family Tradition
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                About Natalie's Baked Goods
              </h2>

              <p className="text-foreground/70 text-sm sm:text-base leading-relaxed max-w-prose">
                Founded with a passion for traditional baking, Natalie's Baked Goods
                brings together time-honored recipes and the finest ingredients to
                create bread and pastries that feel like home.
              </p>

              <p className="text-foreground/70 text-sm sm:text-base leading-relaxed max-w-prose">
                Every loaf is handcrafted fresh on order, using simple, natural ingredients
                and slow fermentation techniques that bring out rich flavor and texture.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="rounded-xl border border-primary/20 p-4 shadow-sm">
                  <p className="text-lg font-semibold">100%</p>
                  <p className="text-sm text-foreground/70">Fresh Ingredients</p>
                </div>

                <div className="rounded-xl border border-primary/20 p-4 shadow-sm">
                  <p className="text-lg font-semibold">On Order</p>
                  <p className="text-sm text-foreground/70">Fresh Baking</p>
                </div>

                <div className="rounded-xl border border-primary/20 p-4 shadow-sm">
                  <p className="text-lg font-semibold">Small Batch</p>
                  <p className="text-sm text-foreground/70">Craft Baking</p>
                </div>

                <div className="rounded-xl border border-primary/20 p-4 shadow-sm">
                  <p className="text-lg font-semibold">Local</p>
                  <p className="text-sm text-foreground/70">Family Owned</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
