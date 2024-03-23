import React from "react";
import { ActionButton } from "@fluentui/react/lib/Button";
import {
  setIsEditingTask,
  setEditTaskId,
} from "../../src/features/taskSlice.js";
import { useDispatch } from "react-redux";

const addFriendIcon = { iconName: "Edit", style: { color: "#9755f5" } };

// eslint-disable-next-line react/prop-types
const Edit = ({ id }) => {
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(setIsEditingTask(true));
    dispatch(setEditTaskId(id));
  };
  return React.createElement(
    ActionButton,
    {
      iconProps: addFriendIcon,
      allowDisabledFocus: true,
      onClick: handleEdit,
      styles: {
        rootHovered: { color: "#9755f5" }, // ganti dengan warna yang Anda inginkan untuk hover state
      },
    },
    "Edit"
  );
};

export default Edit;
