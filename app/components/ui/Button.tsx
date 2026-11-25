import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";
import { cn } from "./utils";

type Variant =
  | "primary"
  | "primary-outline"
  | "secondary"
  | "selected"
  | "light"
  | "dark-outline";
type Size = "sm" | "md" | "lg";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
};

type LinkButtonProps = SharedProps &
  Omit<ComponentProps<typeof Link>, "children" | "className"> & {
    href: ComponentProps<typeof Link>["href"];
  };

type NativeButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">;

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses: Record<Variant, string> = {
  primary: "bg-accent font-bold text-on-accent hover:bg-[#E56000]",
  "primary-outline":
    "border-2 border-primary bg-white text-primary hover:bg-surface-variant",
  secondary: "border border-outline bg-white text-primary hover:bg-surface-variant",
  selected: "bg-primary text-white hover:bg-primary",
  light: "bg-secondary text-primary hover:bg-surface-variant",
  "dark-outline":
    "border border-white/80 bg-transparent text-white hover:bg-white/10 hover:text-accent",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-scale-sm-3 py-scale-sm-1.5 text-label-sm",
  md: "px-scale-sm-5 py-scale-sm-3 text-label-md",
  lg: "px-scale-sm-7 py-scale-sm-3.5 text-label-lg",
};

const baseClasses =
  "inline-flex cursor-pointer items-center justify-center gap-scale-sm-2 rounded-DEFAULT font-label font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-60";

function getButtonClassName(
  variant: Variant,
  size: Size,
  className?: string,
) {
  return cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

export default function Button(props: ButtonProps) {
  if ("href" in props) {
    const {
      href,
      children,
      className,
      variant = "primary",
      size = "md",
      ...linkProps
    } = props;
    return (
      <Link
        {...linkProps}
        href={href}
        className={getButtonClassName(variant, size, className)}
      >
        {children}
      </Link>
    );
  }

  const { children, className, variant = "primary", size = "md", ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      className={getButtonClassName(variant, size, className)}
    >
      {children}
    </button>
  );
}
