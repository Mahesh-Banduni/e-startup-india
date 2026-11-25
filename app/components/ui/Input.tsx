import type { ComponentProps } from "react";
import { cn } from "./utils";

type InputProps = Omit<ComponentProps<"input">, "className"> & {
  className?: string;
  variant?: "default" | "secondary" | "unstyled";
};

const variantClasses = {
  default: "bg-white",
  secondary: "bg-secondary",
  unstyled: "",
};

export default function Input({
  className,
  variant = "default",
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      className={cn(
        variant === "unstyled"
          ? ""
          : "w-full rounded-DEFAULT border border-outline px-scale-sm-4 py-scale-sm-3 font-body text-body-sm text-charcoal placeholder-muted-gray focus:border-accent focus-visible:ring-2 focus-visible:ring-primary focus:outline-none",
        variantClasses[variant],
        className,
      )}
    />
  );
}
