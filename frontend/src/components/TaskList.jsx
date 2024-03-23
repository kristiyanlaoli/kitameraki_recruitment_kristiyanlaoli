/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../../src/features/taskSlice.js";
import Task from "./Task";
import "./TaskList.css";

function TaskList() {
  const dispatch = useDispatch();
  const { tasks, filteredCategory } = useSelector((state) => state.task);
  const [page, setPage] = useState(1);

  useEffect(() => {
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
      triggerElement: ".loading",
      triggerHook: "onEnter",
    })
      .addTo(controller)
      .on("enter", () => {
        setTimeout(() => {
          setPage((prev) => prev + 1);
        }, 1000);
      });

    // Tambahkan setTimeout di sini
    const timer = setTimeout(() => {
      dispatch(getTask({ page: page, pageSize: 4 }));
    }, 1000);
    return () => {
      clearTimeout(timer);
      scene.update();
      scene.destroy();
      controller.destroy();
    };
  }, [dispatch, page]);

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
      {displayedTasks.map((task, index) => (
        <Task key={task.id + index} {...task} />
      ))}
      <div className="loading">
        <h2 className="font-bold text-center flex justify-center">
          <Loader2 className="w-5 mr-2 animate-spin" />
          Loading...
        </h2>
      </div>
    </ul>
  );
}

export default TaskList;
