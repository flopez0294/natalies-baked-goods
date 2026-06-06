import Image from "next/image";
import { Button } from "@/components/ui/button";

type CardProps = {
  title: string;
  description: string;
  price?: string;
  image: string;
  badge?: string;
  onClick?: () => void;
};

export default function Card({
  title,
  description,
  price,
  image,
  badge,
  onClick,
}: CardProps) {
  return (
    <div className="group relative h-full flex flex-col overflow-hidden rounded-2xl border border-primary/10 bg-background shadow-sm transition hover:shadow-xl">

      {/* Image */}
      <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {badge && (
          <div className="absolute left-4 top-4 rounded-full bg-primary px-4 py-1 text-xs font-medium shadow">
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">

        {/* Title + Price */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground">
            {title}
          </h3>

          {price && (
            <span className="text-base font-medium text-foreground/80">
              {price}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-foreground/70">
          {description}
        </p>

        {/* Spacer pushes button to bottom */}
        <div className="flex-1" />

        {/* Button */}
        <div className="pt-4">
          <Button onClick={onClick} className="w-full">
            View Details
          </Button>
        </div>

      </div>
    </div>
  );
}