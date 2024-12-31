import React, { useState } from 'react'

const PaginatedList = () => {

    const items = Array.from({ length: 50 }, (_, index) => `Item - ${index + 1}`);
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerpage = 5;

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    const currentItems = items.slice((currentPage - 1) * itemPerpage, currentPage * itemPerpage)
    
    return (
        <>
            <div>
                <ul>
                    {currentItems.map((x, i) => {
                        return (<li key={i}>{x}</li>)
                    })}
                </ul>
            </div>
            <div>
                <button className='nBtn' onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Prev </button>
                pageNumber -  {currentPage}
                <button className='nBtn' onClick={() => paginate(currentPage + 1)} disabled={currentPage * itemPerpage >= items.length}> Next</button>
            </div>
        </>
    )
}

export default PaginatedList
