import { Box, TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

export default function RegisterForm() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('https://your-backend-url/api/users/register', formData);
    alert("Registered!");
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5">Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth name="name" label="Name" margin="normal" onChange={handleChange} />
        <TextField fullWidth name="email" label="Email" margin="normal" onChange={handleChange} />
        <TextField fullWidth name="password" label="Password" type="password" margin="normal" onChange={handleChange} />
        <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>Submit</Button>
      </form>
    </Box>
  );
}
