import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils/cn";

const buttonVariants = cva(
  "rounded-md transition-all duration-150 shadow-[0px_0.5px_0px_0px] hover:shadow-[0px_1.5px_0px_0px] hover:-translate-y-[1px] active:shadow-[0px_0.25px_0px_0px] active:translate-y-[1px]",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-fill border-2 border-blue-stroke shadow-blue-dropshadow text-blue-text hover:shadow-blue-dropshadow active:bg-blue-fill active:shadow-blue-dropshadow",
        secondary:
          "bg-white-fill border-2 border-white-stroke shadow-white-dropshadow text-white-text hover:shadow-white-dropshadow active:bg-white-fill active:shadow-white-dropshadow",
        error:
          "bg-error-fill border-2 border-error-stroke shadow-error-dropshadow text-error-text hover:shadow-error-dropshadow active:bg-error-fill/50 active:shadow-error-dropshadow",
      },
      size: {
        eq: "p-1",
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-1 text-md",
        lg: "px-6 py-2 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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

export { Button };
