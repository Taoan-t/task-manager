import PropTypes from "prop-types";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";

const TaskList = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
  return (
    <div>
      <ul className={styles.tasks}>
        {tasks
          .sort((a, b) => b.id - a.id)
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
              enterEditMode={enterEditMode}
            />
          ))}
      </ul>
    </div>
  );
};

export default TaskList;

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
};

TaskList.propTypes = {
  deleteTask: PropTypes.func.isRequired,
};

TaskList.propTypes = {
  toggleTask: PropTypes.func.isRequired,
};

TaskList.propTypes = {
  enterEditMode: PropTypes.func.isRequired,
};
