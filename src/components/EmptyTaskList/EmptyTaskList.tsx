import './EmptyTaskList.css';

import taskEmPtyList from './images/Detective-check-footprint 1.svg';

const EmptyTaskList = () => {

    return (
        <div className="task-list-empty">
            <img className='task-list-empty__image' src={taskEmPtyList} alt="Список задач пуст" />
            <p className="task-list-empty__text">Пусто...</p>
        </div>
    
    )
}

export { EmptyTaskList }