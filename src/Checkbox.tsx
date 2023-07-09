"use client";
import { motion } from "framer-motion";
import * as CheckboxPrimivites from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

const AnimatedCheckbox = motion(CheckboxPrimivites.Indicator);

interface Props {
  onChange?: (value: boolean) => void;
}

const Checkbox = (props: Props) => {
  return (
    <CheckboxPrimivites.Root
      onCheckedChange={(e) => {
        const value = e.valueOf();

        // if value is of type boolean
        if (typeof value === "boolean") {
          if (props.onChange) props.onChange(value);
        }
      }}
      defaultChecked
      id="c1"
      className="w-6 h-6 border-2 grid place-items-center rounded-md shadow-[0px_1px_0px_0px] shadow-white-dropshadow"
    >
      <AnimatedCheckbox className="text-blue-fill">
        <Check />
      </AnimatedCheckbox>
    </CheckboxPrimivites.Root>
  );
};

export { Checkbox };
