
import { Button, Card, TextField } from '@mui/material';
import './App.scss';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
const getUsers= async () => {
  try {
    axios.defaults.withCredentials = true;
    const res = await axios.post('/users/login', 
    {
        userName: userName,
        password: password
      }
      );
    
    console.log(res.data)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

  return (
    <div className='main-background'>
      <div className='login-container'>
      <Card className='login-modal'>
      <TextField
      label='Username'
  value={userName}
  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  }}
/>
<TextField
label='Password'
  value={password}
  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }}
/>
<Button variant="contained" onClick={getUsers}>Login</Button>
      </Card>
      </div>
    </div>
  );
}

export default App;
