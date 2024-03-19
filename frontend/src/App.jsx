import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import TaskControl from "./components/TaskControl.jsx";
import TaskList from "./components/TaskList.jsx";
import Modal from "./components/Modal.jsx";
import axios from "axios";

import { initializeIcons } from "@fluentui/react/lib/Icons";
initializeIcons();

function App() {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [category, setCategory] = useState("urgent");

  //get data from backend
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4200/api/tasks?page=1&pageSize=200")
      .then((response) => {
        setTasks(response.data);
      });
  }, []);

  //create task to backend
  function addTaskHandler(taskData) {
    axios.post("http://localhost:4200/api/tasks", taskData).then((response) => {
      console.log(response);
    });

    setIsAddingTask(false);
  }

  //cancel adding task
  function cancelAddTaskHandler() {
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
