/* eslint-disable react/prop-types */
import Task from "./Task";
import "./TaskList.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../../src/features/taskSlice.js";

function TaskList() {
  const { tasks } = useSelector((state) => state.task);
  console.log(tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTask());
  }, [dispatch]);

  if (!tasks || tasks.length === 0) {
    return <p className="no-tasks">No tasks found!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </ul>
  );
}

export default TaskList;
