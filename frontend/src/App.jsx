import "./App.css";
import Header from "./components/Header.jsx";
import TaskControl from "./components/TaskControl.jsx";
import TaskList from "./components/TaskList.jsx";
import Modal from "./components/Modal.jsx";
import EditModal from "./components/EditModal.jsx";
import { useSelector } from "react-redux";

import { initializeIcons } from "@fluentui/react/lib/Icons";
initializeIcons();

function App() {
  const { isAddingTask, isEditingTask } = useSelector((state) => state.task);

  return (
    <>
      {isAddingTask && <Modal />}
      {isEditingTask && <EditModal />}
      <Header />
      <main>
        <TaskControl />
        <TaskList />
      </main>
    </>
  );
}

export default App;
