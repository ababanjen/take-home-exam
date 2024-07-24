import { Meta, StoryFn } from "@storybook/react";
import CurrencySelect from "./CurrencySelect";

// Settings
export default {
  title: "Input/CurrencySelect",
  component: CurrencySelect,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} as Meta;

// Main Story
const Template: StoryFn<any> = (args) => <CurrencySelect {...args} />;

export const Default = Template.bind({});
Default.args = {};
