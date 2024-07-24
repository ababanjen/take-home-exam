import { Meta, StoryFn } from "@storybook/react";

import SettingsSelector from "./SettingsSelector";

// Settings
export default {
  title: "Modal/SettingsSelector",
  component: SettingsSelector,
  parameters: {
    layout: "centered",
  },
} as Meta;

// Main Story
const Template: StoryFn<React.ReactElement> = (args) => <SettingsSelector {...args} />;

export const Default = Template.bind({});
Default.args = {};
