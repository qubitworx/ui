import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils/cn";
import { Button } from "./Button";

const inputvariants = cva("rounded-md transition-all duration-150 text-xs", {
  variants: {
    variant: {
      primary:
        "bg-white-fill border-2 border-white-stroke text-white-text active:bg-white-fill focus:outline-none placeholder:placeholder-white-hover placeholder:text-sm focus:border-blue-stroke",
      error:
        "bg-white-fill border-2 border-error-stroke text-white-text active:bg-white-fill focus:outline-none placeholder:placeholder-white-hover placeholder:text-sm",
    },
    inputSize: {
      sm: "px-1 py-1 text-sm",
      md: "px-2 py-1 text-sm leading-6",
      lg: "px-3 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    inputSize: "md",
  },
});

export interface FlatInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputvariants> {
  loading?: boolean;
  icon?: React.ReactNode;
  iconClassName?: string;
  iconOnClick?: () => void;
  containerClassName?: string;
  endIcon?: React.ReactNode;
}

const FlatInput = React.forwardRef<HTMLInputElement, FlatInputProps>(
  ({ className, variant, inputSize, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex gap-1 items-center",
          props.loading && "opacity-50 pointer-events-none",
          props.containerClassName,
          props.disabled && "opacity-80 pointer-events-none relative"
        )}
      >
        {props.icon && (
          <Button
            onClick={props.iconOnClick}
            disabled={props.iconOnClick === undefined}
            variant={variant == "error" ? "error" : "secondary"}
            size={"eq"}
            className={cn(
              variant == "error" && "!text-white",
              props.iconClassName
            )}
          >
            {props.icon}
          </Button>
        )}
        <input
          className={cn(
            inputvariants({ variant, inputSize, className }),
            props.loading && "text-opacity-50 pointer-events-none relative",
            props.disabled && "pointer-events-none relative"
          )}
          ref={ref}
          {...props}
        ></input>
        {props.endIcon && (
          <Button
            onClick={props.iconOnClick}
            disabled={props.iconOnClick === undefined || props.disabled}
            variant={"secondary"}
            size={"eq"}
            className={cn("text-white-text/70", props.iconClassName)}
          >
            {props.endIcon}
          </Button>
        )}
      </div>
    );
  }
);

export { FlatInput };
