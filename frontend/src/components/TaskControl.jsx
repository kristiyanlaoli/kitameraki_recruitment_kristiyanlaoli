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
        iconProps: { iconName: "Ringer", style: { color: "#9755f5" } },
        onClick: () => {
          dispatch(setCategory("urgent"));
          dispatch(setIsAddingTask(true));
        },
      },
      {
        key: "importantTasks",
        text: "Important",
        iconProps: { iconName: "ActivateOrders", style: { color: "#9755f5" } },
        onClick: () => {
          dispatch(setCategory("important"));
          dispatch(setIsAddingTask(true));
        },
      },
      {
        key: "moderateTasks",
        text: "Moderate",
        iconProps: { iconName: "Heart", style: { color: "#9755f5" } },
        onClick: () => {
          dispatch(setCategory("moderate"));
          dispatch(setIsAddingTask(true));
        },
      },
      {
        key: "lowTasks",
        text: "Low",
        iconProps: { iconName: "Emoji", style: { color: "#9755f5" } },
        onClick: () => {
          dispatch(setCategory("low"));
          dispatch(setIsAddingTask(true));
        },
      },
    ],
  };

  return (
    <div className="flex justify-between">
      <CommandBarButton
        className="hover:text-color-blue bg-color-secondary"
        iconProps={{ iconName: "Add" }}
        text="New task"
        menuProps={menuProps}
        styles={{
          icon: {
            color: "black", // ganti dengan warna yang Anda inginkan
          },
        }}
      />

      <Filter />
    </div>
  );
}

export default TaskControl;
