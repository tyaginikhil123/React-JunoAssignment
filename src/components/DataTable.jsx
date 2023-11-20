import * as React from 'react';

import SearchBar from './SearchBar';

import TableComponent from './TableComponent';
export default function DataTable({ data, tab }) {
  const [selected, setSelected] = React.useState('All');
  const [level, setLevel] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [sortColumn, setSortColumn] = React.useState('name');
  const [sortOrder, setSortOrder] = React.useState('asc');

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const getSortedData = () => {
    const filtered = tab === 'pending' ? data.pending : data.completed;
    const result = filtered.filter((row) => {
      return (
        (selected === 'All' || row.trigerreason === selected || row.actionReason === selected) &&
        (level === 'All' || row.riskLevel === level) &&
        (row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.email.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });
  
    return result.sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];
      return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    });
  };
 
  
  
  
  
  
  
  const cellStyle = { width: '25%',
  padding: '10px 30px',fontWeight:'bold' };
  const tableContainerStyle = { margin: '20px 10px' };

  

  return (
    <>
      <SearchBar
        selected={selected}
        level={level}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setLevel={setLevel}
        setSelected={setSelected}
        tab={tab}/>
        <TableComponent getSortedData={getSortedData} 
       cellStyle={cellStyle} tab={tab} tableContainerStyle={tableContainerStyle}  handleSort={handleSort} />
      </>
      );
}

