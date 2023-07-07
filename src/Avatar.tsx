import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils/cn";

const avatarVariants = cva(
  "rounded-full border-2 border-white-stroke w-fit text-white-text relative",
  {
    variants: {
      divSize: {
        sm: "p-2",
        md: "p-3",
        lg: "p-4",
        xl: "p-5",
      },
    },
  }
);

export interface DivProps
  extends React.HTMLProps<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  icon?: React.ReactNode;
  imgSrc?: string;
  showBadge?: boolean;
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
          <img className="w-full h-full object-cover" src={props.imgSrc} />
        )}
        {props.showBadge && (
          <div className="absolute bottom-0 right-0 rounded-full bg-green-500 w-3 h-3 border-2 border-white-stroke"></div>
        )}
      </div>
    );
  }
);

export default Avatar;
