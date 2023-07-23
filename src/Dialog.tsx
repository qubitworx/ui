"use client";
import * as DialogPrimitives from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { Button } from "..";

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
      <DialogPrimitives.Overlay className="bg-black/10 data-[state=open]:animate-overlayShow fixed inset-0" />
      <DialogPrimitives.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white-fill p-5 shadow-[0px_2px_0px_0px] shadow-white-dropshadow focus:outline-none">
        {props.children[1]}
        <DialogPrimitives.Close asChild>
          <Button
            variant={"secondary"}
            id="dialog-close"
            className="text-black p-2 absolute top-3 right-3"
            aria-label="Close"
          >
            <X />
          </Button>
        </DialogPrimitives.Close>
      </DialogPrimitives.Content>
    </DialogPrimitives.Portal>
  </DialogPrimitives.Root>
);

export const DialogButtons = ({
  onClick,
  confirmationText,
  loading,
  disabled,
}: {
  onClick?: () => void;
  confirmationText?: string;
  loading?: boolean;
  disabled?: boolean;
}) => {
  return (
    <div className="flex gap-2 items-center justify-end mt-2">
      <Button
        variant="secondary"
        onClick={() => {
          document.getElementById("dialog-close")?.click();
        }}
      >
        Cancel
      </Button>
      <Button
        disabled={disabled}
        loading={loading}
        variant="primary"
        onClick={() => {
          onClick?.();
          document.getElementById("dialog-close")?.click();
        }}
      >
        {confirmationText || "Confirm"}
      </Button>
    </div>
  );
};

export { Dialog };
