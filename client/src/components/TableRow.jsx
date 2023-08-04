import React from 'react'

const TableRow = () => {
  return (
    <tr>
      <td>25555</td>
      <td>27 juillet 2023</td>
      <td>500,000.00</td>
      <td>Mobile Money</td>
      <td>Orange CI</td>
      <td>
        <span></span>
      </td>
      <td>
        <div className='icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
            />
          </svg>
        </div>
      </td>
    </tr>
  )
}

export default TableRow
