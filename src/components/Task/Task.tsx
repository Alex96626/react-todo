import type { FC } from "react";
import { useId, useState } from "react";
import "./Task.css";
import { TaskControl } from "../TaskControl/TaskControl";

type TaskProps = {
  taskName: string;
  taskStatus: boolean;
};

const Task: FC<TaskProps> = ({ taskName, taskStatus }) => {
  const fieldId = useId();
  const [status, setStatus] = useState(taskStatus || false);

  function changeTaskStatus() {
    setStatus(!status);
  }

  return (
    <li className="task">
      <input
        type="checkbox"
        className="task__ckeckbox"
        name={fieldId}
        id={fieldId}
        onInput={changeTaskStatus}
        defaultChecked={status}
      />
      <label className="task__status" htmlFor={fieldId}>
        <svg className="task_checked"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="none"
            >
            <mask id="a" fill="#fff">
                <path d="M4.998 14.649 0 9.748 9.56 0l4.997 4.901-9.56 9.748Z" />
            </mask>
            <path
                d="m4.998 14.649-1.4 1.428 1.427 1.4 1.4-1.428-1.427-1.4Zm1.4-1.428L1.4 8.32l-2.8 2.855 4.997 4.902 2.801-2.856ZM13.13 3.5l-9.56 9.747 2.857 2.801 9.559-9.747L13.129 3.5Z"
                fill="#F7F7F7"
                mask="url(#a)"
            />
        </svg>
      </label>
      <span className={!status ? "task__name" : "task__name task__name__done"}>{taskName}</span>
      <TaskControl />
    </li>
  );
};

export { Task };
