import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        if (city) {
            onSearch(city);
            setCity('');
        }
    };

    return (
        <div className="flex mb-4">
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
                className="border rounded-l-lg p-2"
            />
            <button onClick={handleSearch} className="bg-blue-500 text-white rounded-r-lg p-2">
                Search
            </button>
       </div>
     );
};

export default SearchBar;
