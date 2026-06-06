import * as React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "lg";
}

export function Button({
  variant = "default",
  size = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 cursor-pointer";

  const variantClasses = {
    default: "bg-primary text-foreground hover:bg-primary/60 shadow-sm",
    outline:
      "border border-foreground/20 bg-transparent text-foreground hover:bg-primary/25 shadow-sm",
  };

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    lg: "h-11 px-8 text-base",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}