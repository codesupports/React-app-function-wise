import React, { useEffect, useState } from 'react'

const ApiCall = () => {
    const [data, setData] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');

    const fetchApiData = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data.results);
            })
            .catch((err) => console.log(err));
    };

    const handleSort = (order) => {
        const sortedData = [...data].sort((a, b) => {
            if (order === 'asc') {
                return (a.name > b.name) - (b.name > a.name);
            } else{
                return (a.name < b.name) - (b.name < a.name);
            } 
        });
        setSortOrder(order); 
        setData(sortedData);
    };
    useEffect(() => {
        fetchApiData();
    }, []);

    return (
        <>
            <div>
        <button onClick={() => handleSort('asc')}>Sort Ascending</button>
        <button onClick={() => handleSort('desc')}>Sort Descending</button>
      </div>
            <div>
                <ol>
                    {data?.map((item, index) => {
                        return <li key={index}>{item.name}</li>;
                    })}
                </ol>
            </div>
        </>
    );
}


export default ApiCall
