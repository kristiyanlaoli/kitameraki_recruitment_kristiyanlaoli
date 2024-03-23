/* eslint-disable react/prop-types */
import Delete from "./Delete";
import Edit from "./Edit";
import "./Task.css";
// import { SettingsIcon } from "@fluentui/react-icons";

const CATEGORY_ICONS = {
  urgent: "🔴",
  important: "🟡",
  moderate: "🔵",
  low: "🟢",
};

function Task({ id, category, title, summary }) {
  return (
    <li className="task flex justify-between items-center">
      <div className="flex items-center">
        <span className="task-category">{CATEGORY_ICONS[category]}</span>
        <div>
          <h2>{title}</h2>
          <p>{summary}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <Edit id={id} />
        <Delete id={id} />
      </div>
    </li>
  );
}

export default Task;
