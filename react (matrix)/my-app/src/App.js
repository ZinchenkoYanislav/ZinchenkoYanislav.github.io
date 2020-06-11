import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useTable} from 'react-table'
import styled from 'styled-components'

const Styles = styled.div`
  padding: 4rem;

  table {
    border-spacing: 0;
    border: 2px solid black;
    
    tr{
      
      : last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-botton: 1px solid black;
      border-right: 1px solid black;
      border-top: 1px solid black;

      
  
      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table ({ columns, data}){
const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroups => (
          <tr {...headerGroups.getHeaderGroupProps()}>
            { headerGroups.headers.map(column => (
              <th {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))} 
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function App() {
  const columns = React.useMemo(
    () => [
     
      {
        Header: 'матрица',
        columns: [
          {
            Header: '№',
            accessor: 'number',
          },
          {
            Header: '1',
            accessor: 'id_1',
          },
          {
            Header: '2',
            accessor: 'id_2',
          },
          {
            Header: '3',
            accessor: 'id_3',
          },
          {
            Header: '4',
            accessor: 'id_4',
          },
          {
            Header: 'среднее арифм',
            accessor: 'average',
          },
        ],
      },
    ],
    []
  )
    const data = React.useMemo(() => [{
      number: '',
      id_1: 8,
      id_2: 1,
      id_3: 2,
      id_4: 4,
      average: '',
    },

    {
      number: '',
      id_1: 8,
      id_2: 1,
      id_3: 2,
      id_4: 4,
      average: '',
    
    },

    {
      number: '',
      id_1: 8,
      id_2: 1,
      id_3: 2,
      id_4: 4,
      average: '',
    
    },

    {
      number: '',
      id_1: 8,
      id_2: 1,
      id_3: 2,
      id_4: 4,
      average: '',
    
    },

    {
      number: 'сумма',
      id_1: '',
      id_2: '',
      id_3: '',
      id_4: '',
      average: '',
    },

    // function sum1 () {
    //   for (let i = 0; i < data.id_1; i++) { 
    //     let sum =+ data.id_1[i]
    //   }
    //   return sum
    // }
    

  ], [])


  return (
    <div className="App">
      <Styles>
      <Table columns = {columns} data={data} />
      </Styles>
    </div>
    
  );
}

export default App;
