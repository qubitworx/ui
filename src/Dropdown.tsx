"use client";
import React from "react";
import * as DropdownMenuPrimitives from "@radix-ui/react-dropdown-menu";

interface ItemProps {
  title?: string;
  id: string;
  type?: "separator" | "item";
  icon?: React.ReactNode;
}

interface Props {
  children: React.ReactNode;
  items: ItemProps[];
  onItemSelect: (item: string) => void;
}

const DropdownMenu = (props: Props) => {
  return (
    <DropdownMenuPrimitives.Root>
      <DropdownMenuPrimitives.Trigger asChild>
        {props.children}
      </DropdownMenuPrimitives.Trigger>

      <DropdownMenuPrimitives.Portal>
        <DropdownMenuPrimitives.Content
          className="overflow-hidden bg-white-fill border-2 border-white-stroke rounded-md shadow-[0px_1px_0px_0px] shadow-white-dropshadow will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade max-w-xs p-1 w-full gap-1 flex flex-col"
          sideOffset={5}
        >
          {props.items.map((item, index) => (
            <>
              {item.type === "separator" ? (
                <DropdownMenuPrimitives.Separator
                  key={index}
                  className="h-[1px] bg-white-stroke"
                />
              ) : (
                <DropdownMenuPrimitives.Item
                  key={index}
                  className="text-[13px] leading-none rounded-md flex items-center h-[32px] relative select-none data-[highlighted]:outline-none data-[highlighted]:bg-blue-fill/70 data-[highlighted]:text-blue-text w-[15rem] px-3"
                  onClick={() => props.onItemSelect(item.id)}
                >
                  {item.icon && (
                    <span className="mr-2 text-[20px]">{item.icon}</span>
                  )}
                  {item.title}
                </DropdownMenuPrimitives.Item>
              )}
            </>
          ))}

          <DropdownMenuPrimitives.Arrow className="fill-white" />
        </DropdownMenuPrimitives.Content>
      </DropdownMenuPrimitives.Portal>
    </DropdownMenuPrimitives.Root>
  );
};

export default DropdownMenu;
