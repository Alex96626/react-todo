import { FC, useEffect, useState } from 'react';
import { Task } from '../Task/Task';

import type { TaskListProps } from '../../types/TaskListProps';

import './TaskList.css';
import { EmptyTaskList } from '../EmptyTaskList/EmptyTaskList';

const TaskList: FC<TaskListProps> = ({tasks}) => {

    // const [taskListEmpty, settaskListEmpty] = useState(true);

    // useEffect(() => {
    //     if(!taskListEmpty) {
    //         return;
    //     }



    // }, [taskListEmpty])
    
    return <>
        <EmptyTaskList />
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