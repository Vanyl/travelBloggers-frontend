import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";


const Search = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        const userInput = searchQuery.toLowerCase();
        const userInputCapitalFirstLetter = userInput.charAt(0).toUpperCase() + userInput.slice(1);
        navigate(`/country/${userInputCapitalFirstLetter}`);
    };

    return (
        <form className='search-bar' onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search a country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">
                <span className="search-icon">
                    <FaSearch />
                </span>
            </button>
        </form>
    );
};

export default Search;