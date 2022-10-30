import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { schoolData } from '../data/static';

export default function Search() {

    // search text
    const [searchText, setSearchText] = useState("");

    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setSearchText(searchWord);
        // demonstrates filtering thru data
        const newFilter = schoolData.filter(result => {
          return result.text && result.text.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
          setFilteredData([]);
        } else {
          setFilteredData(newFilter);
        }

    }

    return (
        <div className="search">
            <input
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full text-sm font-Montserrat text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-zinc-500 focus:border-zinc-500"
                value={searchText}
                onChange={handleFilter}
                placeholder="Search schools...."
            />
            {filteredData.length > 0 &&
                <div className="data-result">
                    {filteredData.slice(0, 15).map((school, i) =>
                        <p key={i}>{school.text}</p>)}
                </div>
            }
            {filteredData.length === 0 && searchText.length > 0 &&
                <div className="data-result">
                    <p id="no-results">No results found</p>
                </div>}
        </div>
    )
}
