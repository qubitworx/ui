"use client";
import React from "react";
import * as AlertDialogPrimitives from "@radix-ui/react-alert-dialog";
import { FlatButton } from "..";

interface Props {
  title: string;
  description: string;
  confirmButtonText: string;
  children: React.ReactNode;
  onConfirm?: () => void;
}

const AlertDialog = (props: Props) => (
  <AlertDialogPrimitives.Root>
    <AlertDialogPrimitives.Trigger>
      {props.children}
    </AlertDialogPrimitives.Trigger>
    <AlertDialogPrimitives.Portal>
      <AlertDialogPrimitives.Overlay className="bg-black/20 data-[state=open]:animate-overlayShow fixed inset-0" />
      <AlertDialogPrimitives.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white-fill p-[25px] shadow-[0px_0px_5px_0px] shadow-white-dropshadow focus:outline-none">
        <AlertDialogPrimitives.Title className="text-mauve12 m-0 text-[17px] font-medium">
          {props.title}
        </AlertDialogPrimitives.Title>
        <AlertDialogPrimitives.Description className="text-mauve11 mt-4 mb-5 text-[15px] leading-normal">
          {props.description}
        </AlertDialogPrimitives.Description>
        <div className="flex justify-end gap-2">
          <AlertDialogPrimitives.Cancel asChild>
            <FlatButton variant={"secondary"}>Cancel</FlatButton>
          </AlertDialogPrimitives.Cancel>
          <AlertDialogPrimitives.Action asChild>
            <FlatButton onClick={props.onConfirm} variant={"error"}>
              {props.confirmButtonText}
            </FlatButton>
          </AlertDialogPrimitives.Action>
        </div>
      </AlertDialogPrimitives.Content>
    </AlertDialogPrimitives.Portal>
  </AlertDialogPrimitives.Root>
);

export { AlertDialog };
