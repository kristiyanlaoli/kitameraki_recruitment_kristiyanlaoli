import "./App.css";
import { useState } from "react";
import Header from "./components/Header.jsx";
import TaskControl from "./components/TaskControl.jsx";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import TaskList from "./components/TaskList.jsx";
import Modal from "./components/Modal.jsx";
initializeIcons();

function App() {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [category, setCategory] = useState("urgent");

  function cancelAddTaskHandler() {
    setIsAddingTask(false);
  }

  function addTaskHandler(taskData) {
    setTasks((prevTasks) => {
      return [
        ...prevTasks,
        {
          id: Math.random().toString(),
          ...taskData,
        },
      ];
    });
    setIsAddingTask(false);
  }

  return (
    <>
      {isAddingTask && (
        <Modal
          onCancel={cancelAddTaskHandler}
          onAddTask={addTaskHandler}
          category={category}
        />
      )}
      <Header />
      <main>
        <TaskControl
          setCategory={setCategory}
          setIsAddingTask={setIsAddingTask}
        />
        <TaskList tasks={tasks} />
      </main>
    </>
  );
}

export default App;
