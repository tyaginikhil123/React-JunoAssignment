import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SearchBar({ 
    selected,
    level,
    searchTerm,
    setSearchTerm,
    setLevel,
    setSelected,
    tab,
}) {
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <Paper
        component="form"
        sx={{ display: 'flex', alignItems: 'center', width: 400 }}
        elevation={3}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
          value={searchTerm}
          onChange={handleSearchChange}
          size="small"
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </Paper>
      
      {tab === 'pending' || tab === 'completed' ? (
  <FormControl sx={{ m: '0 10px', minWidth: 200 }} size="small">
    <InputLabel id="trigger-reason-label" sx={{ width: '100%' }}>Trigger Reason</InputLabel>
    <Select
      labelId="trigger-reason-label"
      id="trigger-reason-select"
      value={selected}
      onChange={handleChange}
      variant="outlined"
      sx={{ width: '100%' }}
    >
      <MenuItem value="All">Select Reason</MenuItem>
      {tab === 'pending' ? (
        <>
          <MenuItem value='IPChange'>IP Change</MenuItem>
          <MenuItem value='FIFO'>FIFO</MenuItem>
        </>
      ) : (
        <>
          <MenuItem value="Closed">Closed</MenuItem>
          <MenuItem value="Cleared">Cleared</MenuItem>
          <MenuItem value="SOIrequested">SOI Requested</MenuItem>
          <MenuItem value="Flagged">Flagged</MenuItem>
        </>
      )}
    </Select>
  </FormControl>
) : null}

      
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="risk-level-label">Risk Level</InputLabel>
        <Select
          labelId="risk-level-label"
          id="risk-level-select"
          value={level}
          label="Risk Level"
          onChange={handleLevelChange}
        >
          <MenuItem value="All">Select Risk Level</MenuItem>
          <MenuItem value='high'>High</MenuItem>
          <MenuItem value='low'>Low</MenuItem>
          <MenuItem value='medium'>Medium</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
