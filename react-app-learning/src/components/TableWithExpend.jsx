import React, { useState } from 'react'

const TableWithExpend = () => {
  const [expandedRows, setExpandedRows] = useState(false);

  const expandColl = () => {
  // console.log(val);
    setExpandedRows((prev)=> !prev);
  }

console.log(expandedRows);
  return (
    <div>
      <h1>Table with Expandable Rows</h1>
      <p>This component will display a table with expandable rows.</p>
      {/* Table implementation will go here */}
      <table className="expandable-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>
              <div className='table-head1'>Starting</div>
              <div className='flex-row'>
                <div onClick={expandColl}>First</div>
                {expandedRows && 
                    <>
                      <div>A</div>
                      <div>B</div>
                      <div>C</div>
                    </>
                }
              </div>
            </th>
            <th>
              <div className='table-head1'>Incoming</div>
              <div className='flex-row'>
                <div onClick={expandColl}>Second</div>
                {
                  expandedRows && 
                    <>
                      <div>B</div>
                      <div>B</div>
                      <div>B</div>
                    </>
                }

              </div>
            </th>
            <th>
              <div className='table-head1'>Ending</div>
              <div className='flex-row'>
                <div>First</div>
                <div>A</div>
                <div>B</div>
                <div>C</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Example row */}
          <tr>
            <td>1</td>
            <td>
              <div className='flex-row'>
                <div>First</div>
                <div>A</div>
                <div>B</div>
                <div>C</div>
              </div>
            </td>
            <td>Click to expand</td>
            <td>More Info</td>
          </tr>
          {/* More rows can be added here */}
        </tbody>
      </table>
      <p>Expand rows to see more details.</p>

    </div>
  )
}

export default TableWithExpend
