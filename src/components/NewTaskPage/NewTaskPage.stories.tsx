import React from "react";
import NewTaskPage, { props } from "./NewTaskPage";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  component: NewTaskPage,
  title: "New Task Screen",
} as Meta;

const Template: Story<props> = (args) => <NewTaskPage {...args} />;

export const Open = Template.bind({});
Open.args = {
  open: true,
};

export const Close = Template.bind({});
Close.args = {
  open: false,
};
