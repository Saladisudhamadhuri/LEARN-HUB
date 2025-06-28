import { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';
import axios from 'axios';
import Certificate from './Certificate';
import TipsBox from './TipsBox';

export default function DashboardStudent() {
  const [courses, setCourses] = useState([]);
  const studentEmail = "student@demo.com";

  useEffect(() => {
    axios.get(`https://your-backend-url/api/users/enrolled/${studentEmail}`)
      .then(res => setCourses(res.data));
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <TipsBox role="student" />
      <Typography variant="h5">My Enrolled Courses</Typography>
      {courses.map(c => (
        <Card key={c._id} sx={{ my: 2 }}>
          <CardContent>
            <Typography variant="h6">{c.title}</Typography>
            <Typography>{c.description}</Typography>
            <Certificate studentName="Madhuri" courseTitle={c.title} isCompleted={true} />
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}
