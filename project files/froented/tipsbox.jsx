import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

export default function TipsBox({ role = "student" }) {
  const tips = {
    student: [
      "Use 'student@demo.com' to log in and test as a student.",
      "Enroll in any course, then download your certificate from the dashboard.",
      "Only completed courses will allow certificate download."
    ],
    teacher: [
      "Use 'teacher@demo.com' to test the Teacher Dashboard.",
      "Create new courses with a title and description.",
      "Added courses will instantly appear in the global course list."
    ],
    admin: [
      "Use 'admin@demo.com' to access the Admin Dashboard.",
      "View and delete users and courses for moderation.",
      "Admins have full read-only access to all course content."
    ]
  };

  return (
    <Paper elevation={3} sx={{ p: 2, mb: 3, backgroundColor: '#fefefe' }}>
      <Typography variant="h6" gutterBottom>
        💡 Tips for {role.charAt(0).toUpperCase() + role.slice(1)}
      </Typography>
      <List dense>
        {tips[role].map((tip, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={tip} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
