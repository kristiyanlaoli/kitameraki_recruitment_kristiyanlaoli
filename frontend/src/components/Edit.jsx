import React from "react";
import { ActionButton } from "@fluentui/react/lib/Button";

const addFriendIcon = { iconName: "Edit" };

// eslint-disable-next-line react/prop-types
const Edit = () => {
  return React.createElement(
    ActionButton,
    {
      iconProps: addFriendIcon,
      allowDisabledFocus: true,
      //   onClick: handleEdit,
    },
    "Edit"
  );
};

export default Edit;
