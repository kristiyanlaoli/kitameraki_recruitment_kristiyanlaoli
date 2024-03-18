// eslint-disable-next-line no-unused-vars
import React from "react";
import { Stack } from "@fluentui/react";
import { CommandBarButton } from "@fluentui/react/lib/Button";

const menuProps = {
  items: [
    {
      key: "allTasks",
      text: "ALL",
      iconProps: { iconName: "AllApps" },
    },
    {
      key: "urgentTasks",
      text: "Urgent",
      iconProps: { iconName: "Ringer" },
    },
    {
      key: "importantTasks",
      text: "Important",
      iconProps: { iconName: "ActivateOrders" },
    },
    {
      key: "moderateTasks",
      text: "Moderate",
      iconProps: { iconName: "Heart" },
    },
    {
      key: "lowTasks",
      text: "Low",
      iconProps: { iconName: "Emoji" },
    },
  ],
};
const addIcon = { iconName: "Filter" };
const stackStyles = { root: { height: 44 } };

function Filter() {
  return (
    <Stack horizontal styles={stackStyles} className="flex justify-center">
      <CommandBarButton
        className="text-color-primary bg-color-secondary"
        iconProps={addIcon}
        text="Filter"
        menuProps={menuProps}
        // disabled={disabled}
        // checked={checked}
      />
    </Stack>
  );
}

export default Filter;
