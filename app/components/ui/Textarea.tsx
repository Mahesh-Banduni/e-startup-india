import type { ComponentProps } from "react";
import { cn } from "./utils";

type TextareaProps = Omit<ComponentProps<"textarea">, "className"> & {
  className?: string;
  variant?: "default" | "secondary";
};

const variantClasses = {
  default: "bg-white",
  secondary: "bg-secondary",
};

export default function Textarea({
  className,
  variant = "default",
  ...props
}: TextareaProps) {
  return (
    <textarea
      {...props}
      className={cn(
        "w-full rounded-DEFAULT border border-outline px-scale-sm-4 py-scale-sm-3 font-body text-body-sm text-charcoal placeholder-muted-gray focus:border-accent focus-visible:ring-2 focus-visible:ring-primary focus:outline-none",
        variantClasses[variant],
        className,
      )}
    />
  );
}
