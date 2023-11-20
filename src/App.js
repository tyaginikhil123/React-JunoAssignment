
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Box from '@mui/material/Box';
import Overview from './pages/Overview';
import Flagging from './pages/Flagging';
import Monitoring from './pages/Monitoring';
import SideNav from './components/SideNav';
import Onboarding from './pages/Onboarding';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex',gap:'30px' }}>
        <SideNav />
        <Routes>
          <Route path='/' element={<Monitoring />} />
          <Route path='/flagging' element={<Flagging />} />
          <Route path='/overview' element={<Overview />} />
          <Route path='/Onboarding' element={<Onboarding/>} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
