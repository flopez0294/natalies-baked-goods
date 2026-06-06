"use client";

import { Button } from "@/components/ui/button";

type ScrollButtonProps = {
  targetId: string;
  children: React.ReactNode;
  variant?: "default" | "outline";
  size?: "default" | "lg";
  className?: string;
};

export default function ScrollButton({
  targetId,
  children,
  variant,
  size,
  className,
}: ScrollButtonProps) {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={className}
    >
      {children}
    </Button>
  );
}