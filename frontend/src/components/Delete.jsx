/* eslint-disable react/prop-types */
import React from "react";
import { ActionButton } from "@fluentui/react/lib/Button";
import axios from "axios";

const addFriendIcon = { iconName: "Delete" };

const Delete = ({ id }) => {
  const handleClick = () => {
    axios.delete(`http://localhost:4200/api/tasks/${id}`).then((response) => {
      console.log(response);
    });
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
