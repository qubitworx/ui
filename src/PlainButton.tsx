import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils/cn";

const buttonVariants = cva("rounded-md transition-all duration-150", {
  variants: {
    variant: {
      primary:
        "bg-blue-fill border-2 border-blue-stroke text-blue-text hover:bg-blue-fill/90 active:bg-blue-fill",
      secondary:
        "bg-white-fill border-2 border-white-stroke hover:bg-white-stroke text-white-text active:bg-white-fill",
      error:
        "bg-error-fill border-2 border-error-stroke hover:bg-error-stroke text-error-text active:bg-error-fill",
    },
    size: {
      sm: "px-2 py-1 text-sm",
      md: "px-4 py-1 text-md",
      lg: "px-6 py-2 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface FlatButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const FlatButton = React.forwardRef<HTMLButtonElement, FlatButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, className }),
          props.loading && "text-opacity-50 pointer-events-none relative",
          props.disabled && "text-white-text/70 pointer-events-none relative"
        )}
        ref={ref}
        {...props}
      >
        {props.loading && (
          <div className="-top-1 -right-1 w-2 h-2 rounded-full bg-blue-fill z-[999999] animate-ping absolute"></div>
        )}
        {props.children}
      </button>
    );
  }
);

export { FlatButton };
