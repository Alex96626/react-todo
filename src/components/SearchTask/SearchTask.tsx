import type { ChangeEvent, FC } from 'react'
import './SearchTask.css';

type SearchTaskProps = {
    searchValue: Function,
}

const SearchTask: FC<SearchTaskProps> = ({searchValue}) => {

    const handlerGetSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
        searchValue(event.target.value)
    }

    return (
        <input 
            className="new-task"
            onChange={handlerGetSearchValue}
        />
    )
}

export { SearchTask }