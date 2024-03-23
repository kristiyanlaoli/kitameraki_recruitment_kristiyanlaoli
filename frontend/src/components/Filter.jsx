// eslint-disable-next-line no-unused-vars
import React from "react";
import { Stack } from "@fluentui/react";
import { CommandBarButton } from "@fluentui/react/lib/Button";
import { useDispatch } from "react-redux";
import { setFilteredCategory } from "../../src/features/taskSlice.js";

const addIcon = { iconName: "Filter" };
const stackStyles = { root: { height: 44 } };

function Filter() {
  const dispatch = useDispatch();
  const menuProps = {
    items: [
      {
        key: "allTasks",
        text: "All",
        iconProps: { iconName: "AllApps", style: { color: "#9755f5" } },
        onClick: () => {
          dispatch(setFilteredCategory("all"));
        },
      },
      {
        key: "urgentTasks",
        text: "Urgent",
        iconProps: { iconName: "Ringer", style: { color: "#9755f5" } },
        onClick: () => {
          dispatch(setFilteredCategory("urgent"));
        },
      },
      {
        key: "importantTasks",
        text: "Important",
        iconProps: { iconName: "ActivateOrders", style: { color: "#9755f5" } },
        onClick: () => {
          dispatch(setFilteredCategory("important"));
        },
      },
      {
        key: "moderateTasks",
        text: "Moderate",
        iconProps: { iconName: "Heart", style: { color: "#9755f5" } },
        onClick: () => {
          dispatch(setFilteredCategory("moderate"));
        },
      },
      {
        key: "lowTasks",
        text: "Low",
        iconProps: { iconName: "Emoji", style: { color: "#9755f5" } },
        onClick: () => {
          dispatch(setFilteredCategory("low"));
        },
      },
    ],
  };
  return (
    <Stack horizontal styles={stackStyles} className="flex justify-center">
      <CommandBarButton
        className="hover:text-color-blue bg-color-secondary"
        iconProps={addIcon}
        text="Filter"
        menuProps={menuProps}
        styles={{
          icon: {
            color: "black", // ganti dengan warna yang Anda inginkan
          },
        }}
      />
    </Stack>
  );
}

export default Filter;
