import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import LaunchIcon from '@mui/icons-material/Launch';
import Box from '@mui/material/Box'
const TableComponent = ({
    getSortedData, cellStyle, tab,
    tableContainerStyle,
    handleSort
  }
)=>{
    return (<TableContainer component={Paper} style={tableContainerStyle}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{ ...cellStyle, fontWeight: 'bold',borderBottom: '1px solid #ccc', background: '#f2f2f2' }}
                
                onClick={() => handleSort('name')}
                sx={{ cursor: 'pointer' }}
              >
                Name
              </TableCell>
              
              <TableCell style={{ ...cellStyle, fontWeight: 'bold',borderBottom: '1px solid #ccc', background: '#f2f2f2' }} align="center">Risk Level</TableCell>               
              <TableCell style={{ ...cellStyle, fontWeight: 'bold',borderBottom: '1px solid #ccc', background: '#f2f2f2' }} align="center">Trigger Reason</TableCell>
              <TableCell style={{ ...cellStyle, fontWeight: 'bold',borderBottom: '1px solid #ccc', background: '#f2f2f2' }} align="center">Queued</TableCell>
             <TableCell style={{ ...cellStyle, fontWeight: 'bold',borderBottom: '1px solid #ccc', background: '#f2f2f2' }} align="center">Date</TableCell>               
             {tab === 'pending' && (
                <TableCell style={{ ...cellStyle, fontWeight: 'bold',borderBottom: '1px solid #ccc', background: '#f2f2f2' }} align="center">Previously Reviewed</TableCell>
              )}
              {tab === 'completed' && (
             <TableCell style={{ ...cellStyle, fontWeight: 'bold',borderBottom: '1px solid #ccc', background: '#f2f2f2' }} align="center">Action Taken</TableCell>
              )}
            </TableRow>
              
           
          </TableHead>
          <TableBody>
            {getSortedData().map((row) => (
              <TableRow
                key={row.name}
                
              >
                <TableCell style={cellStyle} component="th" scope="row">
                  <Box sx={{display:'flex',justifyContent:'space-between'}}>
                  <Box>
                   {row.name}<br></br>
                   <p style={{fontSize:"12px",color:'grey'}}>({row.email})</p>
                   </Box>
                   <Box>
                   <LaunchIcon style={{
                    fontSize: '14px',
                    color: 'blue',
                  }} />
                   </Box>
                  </Box>
                </TableCell>
               
                <TableCell
                  style={{
                    ...cellStyle
                   
                  }}
                  align="center"
                >
                  <FiberManualRecordIcon  style={{
                    fontSize:'10px',
                    color: row.riskLevel === 'high' ? 'red' : row.riskLevel === 'low' ? 'green' : 'orange',
                  }}/>
                  {row.riskLevel}
                </TableCell>
                {
                  tab=== 'pending' && (
                 <TableCell style={cellStyle} align="center">{row.trigerreason}</TableCell>
                  )
                }
                {
                  tab==='completed' && (
                    <TableCell style={cellStyle} align="center">{row.actionReason}</TableCell>
                  )
                }
                {
                  tab=== 'pending' && (
                  <TableCell style={cellStyle} align="center">{row.queued}</TableCell>
                  )                 }
                 {tab==='completed' && (
                    <TableCell style={cellStyle} align="center">{row.timeToClose}</TableCell>
                   )                 
                 }
                  <TableCell sx={{ ...cellStyle, width: '25%',color:'grey' }} align="right">
  {row.date}
</TableCell>

{tab === 'pending' && (
  <TableCell sx={{ ...cellStyle, width: '25%' }} align="right">
    {row.previouslyReviewed.value === 'Yes'
      ? (
        <>
          Yes <br /> ({row.previouslyReviewed.date})
        </>
      )
      : 'No'}
  </TableCell>
)}

{tab === 'completed' && (
  <TableCell sx={{ ...cellStyle, width: '25%' }} align="right">
    {row.actionTaken.name} <br /> ({row.actionTaken.email})
  </TableCell>
)}
               
                 
                
 </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  
};
export default TableComponent;