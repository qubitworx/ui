import type { Meta } from "@storybook/react";
import Input from "../src/Input";
import { Send } from "../src/icons";

const meta: Meta<typeof Input> = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  component: Input,

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  render: (props) => (
    <Input
      iconClassName="p-2"
      iconOnClick={() => {
        alert("clicked");
      }}
      endIcon={<Send size={16} />}
      {...props}
    />
  ),
};

export default meta;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Core = {
  args: {
    variant: "primary",
    loading: false,
    placeholder: "Input",
  },
  argTypes: {
    placeholder: {
      control: { type: "text" },
    },
    variant: {
      options: ["primary"],
      control: { type: "radio" },
    },
    loading: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};
