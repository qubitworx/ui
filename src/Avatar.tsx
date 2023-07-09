import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils/cn";

const avatarVariants = cva(
  "rounded-full border border-white-stroke w-fit text-white-text relative",
  {
    variants: {
      divSize: {
        sm: "w-8 h-8 p-1",
        md: "w-10 h-10 p-1",
        lg: "w-12 h-12 p-1",
        xl: "w-16 h-16 p-1",
      },
    },
    defaultVariants: {
      divSize: "md",
    },
  }
);

export interface DivProps
  extends React.HTMLProps<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  icon?: React.ReactNode;
  imgSrc?: string;
  showBadge?: boolean;
  imgClassName?: string;
}

const Avatar = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className, divSize, ...props }, ref) => {
    return (
      <div
        className={cn(avatarVariants({ divSize, className }))}
        ref={ref}
        {...props}
      >
        {props.icon}
        {props.imgSrc && (
          <img
            className={cn("w-full h-full object-cover", props.imgClassName)}
            src={props.imgSrc}
          />
        )}
        {props.showBadge && (
          <div className="absolute bottom-0 right-0 rounded-full bg-green-500 w-3 h-3 border-2 border-white-stroke"></div>
        )}
      </div>
    );
  }
);

export { Avatar };
