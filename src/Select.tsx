"use client";
import React from "react";
import * as SelectPrimitives from "@radix-ui/react-select";
import { cn } from "./utils/cn";
import { CaretDown, CaretUp, Check } from "phosphor-react";
import { Button } from "..";

interface Item {
  value: string;
  label: string;
}

interface Props {
  placeholder?: string;
  onChange?: (value: string) => void;
  ariaLabel?: string;
  items?: Item[];
  defaultValue?: string;
}

const Select = (props: Props) => (
  <SelectPrimitives.Root
    onValueChange={props.onChange}
    defaultValue={props.defaultValue}
  >
    <SelectPrimitives.Trigger aria-label={props.ariaLabel} asChild>
      <Button
        variant={"secondary"}
        className="flex items-center justify-start gap-2 text-sm px-4 h-[36px]"
      >
        <SelectPrimitives.Value placeholder={props.placeholder} />
        <SelectPrimitives.Icon className="text-violet11">
          <CaretDown />
        </SelectPrimitives.Icon>
      </Button>
    </SelectPrimitives.Trigger>
    <SelectPrimitives.Portal>
      <SelectPrimitives.Content className="overflow-hidden bg-white-fill border-2 border-white-stroke rounded-md shadow-[0px_1px_0px_0px] shadow-white-dropshadow">
        <SelectPrimitives.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-blue-fill cursor-default">
          <CaretUp />
        </SelectPrimitives.ScrollUpButton>
        <SelectPrimitives.Viewport className="p-1">
          {props.items?.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectPrimitives.Viewport>
        <SelectPrimitives.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-blue-fill cursor-default">
          <CaretDown />
        </SelectPrimitives.ScrollDownButton>
      </SelectPrimitives.Content>
    </SelectPrimitives.Portal>
  </SelectPrimitives.Root>
);

const SelectItem = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => {
    return (
      <SelectPrimitives.Item
        className={cn(
          "text-[13px] leading-none rounded-md flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[highlighted]:outline-none data-[highlighted]:bg-blue-fill data-[highlighted]:text-blue-text",
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <SelectPrimitives.ItemText>{children}</SelectPrimitives.ItemText>
        <SelectPrimitives.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
          <Check />
        </SelectPrimitives.ItemIndicator>
      </SelectPrimitives.Item>
    );
  }
);

export { Select };
