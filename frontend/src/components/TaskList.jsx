/* eslint-disable react/prop-types */
import Task from "./Task";
import "./TaskList.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../../src/features/taskSlice.js";

function TaskList() {
  //medapatkan data task dari backend
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTask());
  }, [dispatch]);

  const { tasks, filteredCategory } = useSelector((state) => state.task);

  const displayedTasks = tasks.filter((task) => {
    if (filteredCategory === "all") {
      return true;
    }
    return task.category === filteredCategory;
  });

  if (!displayedTasks || displayedTasks.length === 0) {
    return <p className="no-tasks">No tasks found!</p>;
  }

  return (
    <ul className="task-list">
      {displayedTasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </ul>
  );
}

export default TaskList;
