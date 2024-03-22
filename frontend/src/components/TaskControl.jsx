import { CommandBarButton } from "@fluentui/react/lib/Button";
import Filter from "./Filter.jsx";
import { useDispatch } from "react-redux";
import { setCategory, setIsAddingTask } from "../../src/features/taskSlice.js";

// eslint-disable-next-line react/prop-types
function TaskControl() {
  const dispatch = useDispatch();
  const menuProps = {
    items: [
      {
        key: "urgentTasks",
        text: "Urgent",
        iconProps: { iconName: "Ringer" },
        onClick: () => {
          dispatch(setCategory("urgent"));
          dispatch(setIsAddingTask(true));
        },
      },
      {
        key: "importantTasks",
        text: "Important",
        iconProps: { iconName: "ActivateOrders" },
        onClick: () => {
          dispatch(setCategory("important"));
          dispatch(setIsAddingTask(true));
        },
      },
      {
        key: "moderateTasks",
        text: "Moderate",
        iconProps: { iconName: "Heart" },
        onClick: () => {
          dispatch(setCategory("moderate"));
          dispatch(setIsAddingTask(true));
        },
      },
      {
        key: "lowTasks",
        text: "Low",
        iconProps: { iconName: "Emoji" },
        onClick: () => {
          dispatch(setCategory("low"));
          dispatch(setIsAddingTask(true));
        },
      },
    ],
  };
  const addIcon = { iconName: "Add" };
  return (
    <div className="flex justify-between">
      <CommandBarButton
        className="text-color-primary bg-color-secondary"
        iconProps={addIcon}
        text="New task"
        menuProps={menuProps}
      />

      <Filter />
    </div>
  );
}

export default TaskControl;
