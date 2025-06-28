import { useEffect, useState } from 'react';
import {
  Container, Typography, List, ListItem, ListItemText, IconButton,
  Divider
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import TipsBox from './TipsBox';

export default function DashboardAdmin() {
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);

  const fetchData = async () => {
    const headers = { "x-user-role": "admin" };
    const resUsers = await axios.get("https://your-backend-url/api/admin/users", { headers });
    const resCourses = await axios.get("https://your-backend-url/api/admin/courses", { headers });
    setUsers(resUsers.data);
    setCourses(resCourses.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`https://your-backend-url/api/admin/users/${id}`, {
      headers: { "x-user-role": "admin" }
    });
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <TipsBox role="admin" />
      <Typography variant="h5" gutterBottom>All Users</Typography>
      <List dense>
        {users.map(user => (
          <ListItem
            key={user._id}
            secondaryAction={
              <IconButton onClick={() => deleteUser(user._id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={`${user.name} (${user.type})`} secondary={user.email} />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>All Courses</Typography>
      <List dense>
        {courses.map(course => (
          <ListItem key={course._id}>
            <ListItemText
              primary={course.title}
              secondary={`Educator: ${course.educator}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
