import { useState } from "react";
import { SearchTask } from "../SearchTask/SearchTask";
import { TaskList } from "../TaskList/TaskList";

import type { SetStateAction } from "react";
import "./Board.css";

const Board = () => {

  type SearchParam = {
    name: string,
    type: string,
  }[]
   
  const tasksList = [
    {
      name: 'task1',
      type: 'test1'
    },
    {
      name: 'task2',
      type: 'test2'
    },
    {
      name: 'task3',
      type: 'test3'
    },
    {
      name: 'task4',
      type: 'test2'
    },
  ];

  const [searchParams ,setSearchParams] = useState('');

  const filteredTask = tasksList.filter(
    ({name, type}) => 
      name === searchParams || 
      type === searchParams
  );
  
  

  const handlerSetSearchParam = (value: SetStateAction<string>) => {
    setSearchParams(value)
  }

  return (
    <>  
        <div className="task__board">
            <SearchTask  searchValue={handlerSetSearchParam} />
            <TaskList tasks={(filteredTask.length > 0) ? filteredTask : tasksList}/>
        </div>
    </>
  );
};

export { Board };
