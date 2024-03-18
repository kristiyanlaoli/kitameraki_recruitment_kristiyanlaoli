import { CommandBarButton } from "@fluentui/react/lib/Button";
import Filter from "../../../../sementara/components/Filter.jsx";

const menuProps = {
  items: [
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
const addIcon = { iconName: "Add" };

function TaskControl() {
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
