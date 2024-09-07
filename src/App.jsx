import { useState } from 'react';
import { Button, Typography, Card, Box } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './App.css';

function App() {
  const [location, setLocation] = useState('PHILADELPHIA');
  const [currentTemp, setCurrentTemp] = useState(78);
  const [rainIn, setRainIn] = useState(30); // Rain in 30 minutes
  const [tempIncrease, setTempIncrease] = useState({ value: 80, hours: 8 });
  const [tempDecrease, setTempDecrease] = useState({ value: 69, hours: 16 });

  const changeLocation = () => {
    const newLocation = prompt('Enter a new location:');
    if (newLocation) {
      setLocation(newLocation.toUpperCase());
    }
  };

  return (
    <Box 
      sx={{ 
        maxWidth: 600,  // Increased width
        margin: '50px auto',  // Center vertically
        padding: '40px',  // Increased padding
        textAlign: 'center', 
        backgroundColor: '#fff',  // White background for contrast
        borderRadius: '20px',  // Larger border radius for a rounded look
        boxShadow: '0 6px 30px rgba(0, 0, 0, 0.1)',  // Subtle shadow for depth
      }}
    >
      <Button 
        onClick={changeLocation}
        variant="contained" 
        sx={{ 
          fontSize: '32px',  // Increased font size
          fontWeight: 'bold', 
          mb: 4  // Increased bottom margin
        }}
      >
        {location}
      </Button>

      <Card 
        elevation={4} 
        sx={{ padding: '40px', marginBottom: '30px' }}  // Larger padding for card
      >
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center',  // Center the items horizontally
            alignItems: 'center', 
            gap: 4  // Added gap for spacing between elements
          }}
        >
          <Button 
            variant="text" 
            onClick={() => alert('View Yesterday')} 
            sx={{ fontSize: '24px' }}  // Increased button font size
          >
            YST
          </Button>

          <Typography 
            variant="h1" 
            sx={{ fontSize: '100px', fontWeight: 'bold' }}  // Increased font size for temperature
          >
            {currentTemp}°F
          </Typography>

          <Button 
            variant="text" 
            onClick={() => alert('View Tomorrow')} 
            sx={{ fontSize: '24px' }}  // Increased button font size
          >
            TMR
          </Button>
        </Box>

        <Box 
          sx={{ marginTop: '20px', padding: '15px', backgroundColor: 'red', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Typography variant="body1" sx={{ color: 'white', display: 'flex', alignItems: 'center', fontSize: '18px' }}>
            🌧️ Rain in {rainIn} min
          </Typography>
        </Box>
      </Card>

      <Box>
        <Typography 
          variant="body1" 
          sx={{ 
            fontSize: '24px',  // Larger font size for trend text
            color: '#0288d1',  // Matching blue color for trend
            marginBottom: '15px',  // Increased spacing between lines
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <ArrowUpwardIcon sx={{ marginRight: '10px', fontSize: '30px' }} />
            {tempIncrease.value}° in {tempIncrease.hours} hrs
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ArrowDownwardIcon sx={{ marginRight: '10px', fontSize: '30px' }} />
            {tempDecrease.value}° in {tempDecrease.hours} hrs
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
