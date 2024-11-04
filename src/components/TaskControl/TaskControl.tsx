import './TaskControl.css';
import { EditTask } from '../EditTask/EditTask';
import { DeleteTask } from '../DeleteTask/DeleteTask';

const TaskControl = () => {
    return (
        <div className='task__control'>
            <EditTask></EditTask>
            <DeleteTask></DeleteTask>
        </div>
    )
}

export { TaskControl }