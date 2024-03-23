/* eslint-disable react/prop-types */
import React from "react";
import { ActionButton } from "@fluentui/react/lib/Button";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../src/features/taskSlice.js";

const addFriendIcon = { iconName: "Delete", style: { color: "#9755f5" } };

const Delete = ({ id }) => {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    event.preventDefault();
    dispatch(deleteTask(id));
  };

  return React.createElement(
    ActionButton,
    {
      iconProps: addFriendIcon,
      allowDisabledFocus: true,
      onClick: handleClick,
      styles: {
        rootHovered: { color: "#9755f5" }, // ganti dengan warna yang Anda inginkan untuk hover state
      },
    },
    "Delete"
  );
};

export default Delete;
