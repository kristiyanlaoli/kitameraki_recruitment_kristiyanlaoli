import { CommandBarButton } from "@fluentui/react/lib/Button";
import Filter from "./Filter.jsx";

// eslint-disable-next-line react/prop-types
function TaskControl({ setCategory, setIsAddingTask }) {
  const menuProps = {
    items: [
      {
        key: "urgentTasks",
        text: "Urgent",
        iconProps: { iconName: "Ringer" },
        onClick: () => {
          setCategory("urgent");
          setIsAddingTask(true);
        },
      },
      {
        key: "importantTasks",
        text: "Important",
        iconProps: { iconName: "ActivateOrders" },
        onClick: () => {
          setCategory("important");
          setIsAddingTask(true);
        },
      },
      {
        key: "moderateTasks",
        text: "Moderate",
        iconProps: { iconName: "Heart" },
        onClick: () => {
          setCategory("moderate");
          setIsAddingTask(true);
        },
      },
      {
        key: "lowTasks",
        text: "Low",
        iconProps: { iconName: "Emoji" },
        onClick: () => {
          setCategory("low");
          setIsAddingTask(true);
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
