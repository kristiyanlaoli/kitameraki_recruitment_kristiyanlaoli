import "./App.css";
import Header from "./components/Header.jsx";
import TaskControl from "./components/TaskControl.jsx";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import TaskList from "./components/TaskList.jsx";
initializeIcons();

function App() {
  const tasks = [
    {
      id: 1,
      category: "urgent",
      title: "Finish the report",
      summary: "The deadline is today!",
    },
    {
      id: 2,
      category: "important",
      title: "Prepare for the meeting",
      summary: "The meeting is tomorrow.",
    },
    {
      id: 3,
      category: "moderate",
      title: "Buy groceries",
      summary: "We are running out of milk.",
    },
    {
      id: 4,
      category: "low",
      title: "Call mom",
      summary: "It's been a while since we last talked.",
    },
  ];
  return (
    <>
      <Header />
      <main>
        <TaskControl />
        <TaskList tasks={tasks} />
      </main>
    </>
  );
}

export default App;
