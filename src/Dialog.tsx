"use client";
import * as DialogPrimitives from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

interface Props {
  children: React.ReactNode[];
}

export const DialogTitle = (props: { children: React.ReactNode }) => (
  <DialogPrimitives.Title className="text-white-text m-0 text-lg font-medium">
    {props.children}
  </DialogPrimitives.Title>
);

const Dialog = (props: Props) => (
  <DialogPrimitives.Root>
    <DialogPrimitives.Trigger asChild>
      {props.children[0]}
    </DialogPrimitives.Trigger>
    <DialogPrimitives.Portal>
      <DialogPrimitives.Overlay className="bg-black/20 data-[state=open]:animate-overlayShow fixed inset-0" />
      <DialogPrimitives.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white-fill p-5 shadow-[0px_0px_5px_0px] shadow-white-dropshadow focus:outline-none">
        {props.children[1]}
        <DialogPrimitives.Close asChild>
          <button
            className="text-white-text hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <X />
          </button>
        </DialogPrimitives.Close>
      </DialogPrimitives.Content>
    </DialogPrimitives.Portal>
  </DialogPrimitives.Root>
);

export { Dialog };
