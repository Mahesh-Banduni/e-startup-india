import type { ComponentProps } from "react";
import { cn } from "./utils";

type SelectProps = Omit<ComponentProps<"select">, "className"> & {
  className?: string;
  variant?: "default" | "secondary";
};

const variantClasses = {
  default: "bg-white",
  secondary: "bg-secondary",
};

export default function Select({
  className,
  variant = "default",
  ...props
}: SelectProps) {
  return (
    <select
      {...props}
      className={cn(
        "w-full rounded-DEFAULT border border-outline px-scale-sm-4 py-scale-sm-3 font-body text-body-sm text-charcoal focus:border-accent focus-visible:ring-2 focus-visible:ring-primary focus:outline-none",
        variantClasses[variant],
        className,
      )}
    />
  );
}
