/* eslint-disable react/prop-types */
import React from "react";
import { ActionButton } from "@fluentui/react/lib/Button";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../src/features/taskSlice.js";

const addFriendIcon = { iconName: "Delete" };

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
    },
    "Delete"
  );
};

export default Delete;
