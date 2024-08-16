import PropTypes from "prop-types";
import styles from "./TaskItem.module.css";
import { CheckIcon } from "@heroicons/react/24/outline";

const TaskItem = ({ task }) => {
  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type="checkbox"
          checked={task.checked}
          //onChange={}
          name={task.name}
          id={task.id}
        />
        <label htmlFor={task.id} className={styles.label}>
          {task.name}
        </label>
        <p className={styles.checkmark}>
          <CheckIcon strokeWidth={2} width={24} height={24} />
        </p>
      </div>
    </li>
  );
};

export default TaskItem;

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
};
