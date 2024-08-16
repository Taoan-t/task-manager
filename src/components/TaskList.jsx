import PropTypes from "prop-types";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";

const TaskList = ({ tasks }) => {
  return (
    <div>
      <ul className={StyleSheet.tasks}>
        {tasks
          .sort((a, b) => b.id - a.id)
          .map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
      </ul>
    </div>
  );
};

export default TaskList;

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
};
