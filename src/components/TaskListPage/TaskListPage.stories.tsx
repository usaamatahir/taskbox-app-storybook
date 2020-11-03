import React from "react";
import TaskListPage from "./TaskListPage";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Provider } from "react-redux";
import { store } from "../../Redux/Slice";

export default {
  title: "Task List Page",
  component: TaskListPage,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as Meta;

const Template: Story<null> = () => <TaskListPage />;

export const Default = Template.bind({});
