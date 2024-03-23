/* eslint-disable react/prop-types */
import "./Modal.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsEditingTask, editTask } from "../features/taskSlice.js";

function Modal() {
  const dispatch = useDispatch();
  const { editTaskId, tasks } = useSelector((state) => state.task);
  let editedTask = tasks.find((task) => task.id === editTaskId);

  const [title, setTitle] = useState(editedTask.title);
  const [summary, setSummary] = useState(editedTask.summary);
  const [category, setCategory] = useState(editedTask.category);
  const [formInvalid, setFormInvalid] = useState(false);

  function submitHandler(event) {
    event.preventDefault();

    if (title.trim().length === 0 || summary.trim().length === 0) {
      setFormInvalid(true);
      return;
    }

    const editedTaskData = {
      id: editTaskId,
      title: title,
      summary: summary,
      category: category,
    };

    dispatch(editTask(editedTaskData));
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="summary">Summary</label>
            <textarea
              id="summary"
              rows="5"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="category">Category</label>
            <select
              id="category"
              defaultValue={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="urgent">🔴 Urgent</option>
              <option value="important">🟡 Important</option>
              <option value="moderate">🔵 Moderate</option>
              <option value="low">🟢 Low</option>
            </select>
          </p>
          {formInvalid && (
            <p className="error-message">
              Please provide values for task title and summary!
            </p>
          )}
          <p className="actions">
            <button
              type="button"
              onClick={() => dispatch(setIsEditingTask(false))}
            >
              Cancel
            </button>
            <button type="submit">Save Task</button>
          </p>
        </form>
      </dialog>
    </>
  );
}

export default Modal;
