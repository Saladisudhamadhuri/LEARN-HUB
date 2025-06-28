import { useEffect, useState } from 'react';
import { Container, Card, CardContent, Typography, Button } from '@mui/material';
import axios from 'axios';

export default function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("https://your-backend-url/api/courses").then(res => setCourses(res.data));
  }, []);

  const enroll = async (id) => {
    const email = prompt("Enter your email:");
    await axios.post(`https://your-backend-url/api/courses/enroll/${id}`, { email });
    alert("Enrolled!");
  };

  return (
    <Container sx={{ mt: 4 }}>
      {courses.map(c => (
        <Card key={c._id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{c.title}</Typography>
            <Typography>{c.description}</Typography>
            <Button onClick={() => enroll(c._id)} sx={{ mt: 1 }} variant="contained">Enroll</Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}
