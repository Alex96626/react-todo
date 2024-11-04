import { FC } from 'react';
import { Task } from '../Task/Task';

type TaskListProps = {
    tasks?: number[],
}

const TaskList: FC<TaskListProps> = ({tasks}) => {
    console.log(tasks)
    return <>
        { 
            tasks?.map((task,index) => 
            <Task key={index} taskName={task.toString()}></Task>)
        }
    </>
}

export { TaskList }