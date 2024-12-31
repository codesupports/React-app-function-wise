import React, { useEffect, useState } from 'react'

const ApiCall = () => {
    const [data, setData] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');

    const [currentPage, setCurrentPage] = useState(1);
    const pageNumbers = [];
    const itemPerpage = 20;
    const maxPageNumbers = 5;
    const totalPages = Math.ceil(data.length / itemPerpage)

    let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2))
    let endPage = Math.min(totalPages, startPage + maxPageNumbers - 1)

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


    // How many page show
    const currentItems = data.slice((currentPage - 1) * itemPerpage, currentPage * itemPerpage)

    // Pagination click function for next Prev
    const paginate = (pageNumber) => {
        if (pageNumber <= 1 || pageNumber > totalPages) return; // prevent invalid page numbers
        setCurrentPage(pageNumber)
    }
    // Adjust the start page if the end page is at the max limit
    if (endPage === totalPages) {
        startPage = Math.max(1, totalPages - maxPageNumbers + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    // Data shorting function
    const handleSort = (order) => {
        const sortedData = [...data].sort((a, b) => {
            if (order === 'asc') {
                return (a.name > b.name) - (b.name > a.name);
            } else {
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
                    {currentItems?.map((item, index) => {
                        return <li key={index}>{item.name}</li>;
                    })}
                </ol>
            </div>
            <div className="paginamtion-btn">
                <button onClick={() => paginate(currentPage - 1)}  disabled={currentPage === 1}>Prev</button>

                {pageNumbers.map((page) => (
                    <button
                        key={page}
                        onClick={() => paginate(page)}
                        style={{
                            fontWeight: page === currentPage ? 'bold' : 'normal',
                            margin: '0 5px',
                        }}
                    >{page}</button>
                ))}


                <button onClick={() => paginate(currentPage + 1)}>Next</button>
            </div>
        </>
    );
}


export default ApiCall
