import "./App.css";
import Header from "./components/Header.jsx";
import TaskControl from "./components/TaskControl.jsx";
import { initializeIcons } from "@fluentui/react/lib/Icons";
initializeIcons();

function App() {
  return (
    <>
      <Header />
      <main>
        <TaskControl />
      </main>
    </>
  );
}

export default App;
