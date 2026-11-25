import type { ComponentProps, ReactNode } from "react";
import { cn } from "./utils";

type LabelProps = Omit<ComponentProps<"label">, "children" | "className"> & {
  children: ReactNode;
  className?: string;
  variant?: "default" | "plain";
};

const variantClasses = {
  default: "mb-scale-sm-2 block font-label text-label-sm font-semibold text-charcoal",
  plain: "",
};

export default function Label({
  children,
  className,
  variant = "default",
  ...props
}: LabelProps) {
  return (
    <label {...props} className={cn(variantClasses[variant], className)}>
      {children}
    </label>
  );
}
