import { useContext, useState } from 'react';
import searchIcon from '../../assets/icons/search.svg';
import NewsContext from '../../context';
import useDebounce from '../../hooks/useDebounce';

export default function Search() {
    const [value, setValue] = useState("");
    const { setSearchValue } = useContext(NewsContext);

    const handleChange = () => {
        setSearchValue(value);
    };

    useDebounce(handleChange, 500);

    return (
        <div className="flex search-box items-center space-x-3 lg:space-x-1">
            <input onChange={(e) => setValue(e.target.value)} placeholder="Search..." type="text" className="" />
            <img src={searchIcon} alt="Search" />
        </div>
    );
}
