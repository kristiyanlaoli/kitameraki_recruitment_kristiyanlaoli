/* eslint-disable react/prop-types */
import "./Modal.css";
import { useState } from "react";

function Modal({ onCancel, onAddTask, category }) {
  const [formInvalid, setFormInvalid] = useState(false);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (title.trim().length === 0 || summary.trim().length === 0) {
      setFormInvalid(true);
      return;
    }

    const taskData = {
      title,
      summary,
      category,
    };

    onAddTask(taskData);
  }
  return (
    <>
      <div className="backdrop"></div>
      <dialog className="modal" open>
        <form id="new-task-form" onSubmit={submitHandler}>
          <p>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="summary">Summary</label>
            <textarea
              id="summary"
              rows="5"
              onChange={(e) => setSummary(e.target.value)}
            />
          </p>
          {formInvalid && (
            <p className="error-message">
              Please provide values for task title and summary!
            </p>
          )}
          <p className="actions">
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit">Add Task</button>
          </p>
        </form>
      </dialog>
    </>
  );
}

export default Modal;
