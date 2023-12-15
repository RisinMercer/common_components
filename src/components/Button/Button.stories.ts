import type { Meta, StoryObj } from "@storybook/react";

import Button from "components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "contained",
    color: "primary",
    size: "medium",
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "contained",
    color: "secondary",
    size: "medium",
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    color: "primary",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    color: "primary",
    label: "Button",
  },
};

export const Warning: Story = {
  args: {
    variant: "contained",
    color: "warning",
    size: "medium",
    label: "Delete Now",
  },
};
