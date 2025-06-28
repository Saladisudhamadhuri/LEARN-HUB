import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import jsPDF from 'jspdf';

export default function Certificate({
  studentName = "Madhuri",
  courseTitle = "Web Development",
  isCompleted = true
}) {
  const generatePDF = () => {
    if (!isCompleted) {
      alert("Complete the course to download your certificate!");
      return;
    }

    const doc = new jsPDF({ orientation: 'landscape', unit: 'pt', format: [600, 400] });

    const learnhubLogo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'; // Replace with actual base64 logo

    doc.setFillColor("#f0f7ff");
    doc.rect(0, 0, 600, 400, 'F');

    doc.addImage(learnhubLogo, 'PNG', 40, 30, 90, 90);

    doc.setFont("times", "bold");
    doc.setTextColor("#004080");
    doc.setFontSize(30);
    doc.text("LearnHub Certificate of Completion", 300, 110, { align: 'center' });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor("#000");
    doc.text(studentName, 300, 170, { align: 'center' });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.setTextColor("#333");
    doc.text("has successfully completed the course", 300, 200, { align: 'center' });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor("#1565C0");
    doc.text(`"${courseTitle}"`, 300, 230, { align: 'center' });

    doc.setFontSize(12);
    doc.setTextColor("#666");
    doc.text(`Dated: ${new Date().toLocaleDateString()}`, 480, 330);
    doc.text("Signed: LearnHub Team", 60, 330);

    doc.save(`${studentName.replace(" ", "_")}_LearnHub_Certificate.pdf`);
  };

  return (
    <Container sx={{ mt: 3, textAlign: "center" }}>
      <Typography gutterBottom>📜 Certificate Available</Typography>
      <Button variant="contained" onClick={generatePDF}>
        Download Certificate
      </Button>
    </Container>
  );
}
