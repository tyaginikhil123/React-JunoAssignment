// CloseAccountDialog.jsx
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const CloseAccountDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
      <DialogTitle sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        Close Account
        <IconButton onClick={handleClose} color="inherit" edge="end" size="large">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <InputLabel htmlFor="email" sx={{ fontSize: '12px' }}>
          Email
        </InputLabel>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          
          sx={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            width:'500px'
          }}
        />
      </DialogContent>
      <DialogContent>
        <FormControl>
          <FormLabel id="uar-label">Want to file UAR</FormLabel>
          <RadioGroup row aria-labelledby="uar-label" name="uar-radio-buttons-group">
            <FormControlLabel value="Yes" control={<Radio />} label="YES" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogContent>
        <InputLabel htmlFor="reason" sx={{ fontSize: '12px' }}>
          Reason
        </InputLabel>
        <TextField
          autoFocus
          margin="dense"
          id="reason"
          type="text"
          fullWidth
          sx={{
            border: '1px solid #ccc',
            borderRadius: '8px',
          }}
        />
      </DialogContent>
      <DialogContent>
        <InputLabel htmlFor="note" sx={{ fontSize: '10px' }}>
          Note
        </InputLabel>
        <TextField
          autoFocus
          margin="dense"
          id="note"
          type="text"
          fullWidth
          sx={{
            border: '1px solid #ccc',
            borderRadius: '8px',
          }}
        />
      </DialogContent>
      <DialogActions fullWidth>
        <Checkbox color="primary" />
        <InputLabel htmlFor="changeFee" sx={{ fontSize: '14px' }}>
          Change Close Fee
        </InputLabel>
        <Button
      onClick={handleClose}
      sx={{
        backgroundColor: 'lightgrey',
        width: '50%',
        '&:hover': {
          backgroundColor: 'blue',
          color: 'white',
        },
      }}
    >
      Close Account
    </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CloseAccountDialog;
