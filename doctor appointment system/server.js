const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let doctors = [
  { id: 1, name: "Dr. Priya Sharma", specialty: "Cardiologist", experience: "10+ years" },
  { id: 2, name: "Dr. Arjun Patel", specialty: "Dermatologist", experience: "8+ years" },
  { id: 3, name: "Dr. Meera Reddy", specialty: "Pediatrician", experience: "6+ years" }
];

let appointments = [];

// Endpoint to get doctor list
app.get('/doctors', (req, res) => {
  res.json(doctors);
});

// Endpoint to receive appointment
app.post('/appointment', (req, res) => {
  const appointment = req.body;
  appointments.push(appointment);
  res.json({ message: 'Appointment booked successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
