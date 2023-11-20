import React ,{ useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab'
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Button from '@mui/material/Button'; // Import Button component
import DataTable from '../components/DataTable';
import userData from '../Data/Users.json';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';



import CloseAccountDialog from '../components/CloseAccountDialog';
const Monitoring = () => {
  const [activeTab, setActiveTab] = useState('pending'); // Default tab is 'pending'

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Box>
      <h1>Monitoring</h1>
      <TabContext value={activeTab}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '16px' }}>
          <TabList onChange={handleTabChange} aria-label="Review Management Tabs">
            <Tab label="Pending" value="pending" />
            <Tab label="Completed" value="completed" />
          </TabList>
          {/* Add your button here */}
          <Button variant="contained" onClick={handleClickOpen} startIcon={<CloseTwoToneIcon sx={{ border: '2px solid red', borderRadius: '50%', padding: '2px', marginRight: '4px' }}/>} sx={{
        backgroundColor: 'lightcoral',
        color: 'red',
        '&:hover': {
          backgroundColor: 'lightcoral', // Light red color on hover
        },
      }}>
           Close Account
          </Button>
          <CloseAccountDialog open={open} handleClose={handleClose} />
      </Box>

        <TabPanel value="pending">
          <DataTable data={userData} tab={activeTab} />
        </TabPanel>
        <TabPanel value="completed">
          <DataTable data={userData} tab={activeTab} />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Monitoring;
