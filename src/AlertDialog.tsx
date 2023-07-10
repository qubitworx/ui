"use client";
import React from "react";
import * as AlertDialogPrimitives from "@radix-ui/react-alert-dialog";
import { FlatButton } from "..";

interface Props {
  title: string;
  description: string;
  confirmButtonText: string;
  children: React.ReactNode;
}

const AlertDialog = (props: Props) => (
  <AlertDialogPrimitives.Root>
    <AlertDialogPrimitives.Trigger asChild>
      {props.children}
    </AlertDialogPrimitives.Trigger>
    <AlertDialogPrimitives.Portal>
      <AlertDialogPrimitives.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
      <AlertDialogPrimitives.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <AlertDialogPrimitives.Title className="text-mauve12 m-0 text-[17px] font-medium">
          {props.title}
        </AlertDialogPrimitives.Title>
        <AlertDialogPrimitives.Description className="text-mauve11 mt-4 mb-5 text-[15px] leading-normal">
          {props.description}
        </AlertDialogPrimitives.Description>
        <div className="flex justify-end gap-[25px]">
          <AlertDialogPrimitives.Cancel asChild>
            <FlatButton>Cancel</FlatButton>
          </AlertDialogPrimitives.Cancel>
          <AlertDialogPrimitives.Action asChild>
            <button className="text-red11 bg-red4 hover:bg-red5 focus:shadow-red7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
              {props.confirmButtonText}
            </button>
          </AlertDialogPrimitives.Action>
        </div>
      </AlertDialogPrimitives.Content>
    </AlertDialogPrimitives.Portal>
  </AlertDialogPrimitives.Root>
);

export { AlertDialog };
