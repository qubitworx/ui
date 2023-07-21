"use client";
import React, { useState } from "react";
import * as AlertDialogPrimitives from "@radix-ui/react-alert-dialog";
import { Button, Input } from "..";

interface Props {
  title: string;
  description: string;
  confirmButtonText: string;
  children: React.ReactNode;
  onConfirm?: () => void;
  confirmationText?: string;
}

const AlertDialog = (props: Props) => {
  const [text, setText] = useState("");

  return (
    <AlertDialogPrimitives.Root>
      <AlertDialogPrimitives.Trigger>
        {props.children}
      </AlertDialogPrimitives.Trigger>
      <AlertDialogPrimitives.Portal>
        <AlertDialogPrimitives.Overlay className="bg-black/10 data-[state=open]:animate-overlayShow fixed inset-0" />
        <AlertDialogPrimitives.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white-fill p-5 shadow-[0px_2px_0px_0px] shadow-white-dropshadow focus:outline-none">
          <AlertDialogPrimitives.Title className="text-white-text m-0 text-[17px] font-medium">
            {props.title}
          </AlertDialogPrimitives.Title>
          <AlertDialogPrimitives.Description className="text-white-text mt-4 mb-5 text-[15px] leading-normal">
            {props.description}
          </AlertDialogPrimitives.Description>
          {props.confirmationText && (
            <div className="flex flex-col gap-1 mb-2">
              <p className="text-white-text text-sm">
                To confirm type
                <b className="text-black ml-1 mr-1">{props.confirmationText}</b>
                below.
              </p>
              <Input
                placeholder="Confirmation text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full"
              />
            </div>
          )}
          <div className="flex justify-end gap-2">
            <AlertDialogPrimitives.Cancel asChild>
              <Button variant={"secondary"}>Cancel</Button>
            </AlertDialogPrimitives.Cancel>
            <AlertDialogPrimitives.Action asChild>
              <Button
                disabled={
                  props.confirmationText
                    ? text !== props.confirmationText
                    : false
                }
                onClick={() => {
                  if (
                    props.confirmationText &&
                    text !== props.confirmationText
                  ) {
                    return;
                  }
                  props.onConfirm?.();
                  setText("");
                }}
                variant={"error"}
              >
                {props.confirmButtonText}
              </Button>
            </AlertDialogPrimitives.Action>
          </div>
        </AlertDialogPrimitives.Content>
      </AlertDialogPrimitives.Portal>
    </AlertDialogPrimitives.Root>
  );
};

export { AlertDialog };
