import { FC } from 'react';
import { Task } from '../Task/Task';

import type { TaskListProps } from '../../types/TaskListProps';

import './TaskList.css';

const TaskList: FC<TaskListProps> = ({tasks}) => {
    tasks?.map(i=> console.log(i.name))
    
    return <>
        <ul className="task__list">
        { 
            tasks?.map((task,index) => 
                <Task key={index} taskStatus={false}  taskName={task.name} />
            )
        }
        </ul>
    </>
}

export { TaskList }