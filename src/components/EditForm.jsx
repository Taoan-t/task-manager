import { CheckIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";

const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
  const [updateTaskName, setUpdateTaskName] = useState(editedTask.name);

  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    };

    window.addEventListener("keydown", closeModalIfEscaped);

    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, [closeEditMode]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...editedTask, name: updateTaskName });
  };
  return (
    <div role="dialog" aria-labelledby="editTask">
      <form className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={updateTaskName}
            onInput={(e) => setUpdateTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
          <label htmlFor="editTask" className="label">
            Update Task
          </label>
        </div>
        <button
          className="btn"
          aria-label={`Confirm edited task to now need ${updateTaskName}`}
          type="submit"
        >
          <CheckIcon strokeWidth={2} height={24} width={24} />
        </button>
      </form>
    </div>
  );
};

export default EditForm;

EditForm.propTypes = {
  editedTask: PropTypes.object.isRequired,
};

EditForm.propTypes = {
  updateTask: PropTypes.func.isRequired,
};

EditForm.propTypes = {
  closeEditMode: PropTypes.func.isRequired,
};
