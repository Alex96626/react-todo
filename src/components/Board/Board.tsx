import { TaskList } from '../TaskList/TaskList';
import './Board.css';


const Board = () => {
    return (
        <div className='board'>
            <TaskList tasks={[1,4,5,8]}></TaskList>
        </div>
    )
}

export { Board }