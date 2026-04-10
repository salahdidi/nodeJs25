const express = require('express'); 
const app = express(); 
  
const PORT = 3000; 
  
// Route: GET / 
app.get('/', (req, res) => { 
  res.send('Hello from Express!'); 
}); 
  app.get('/hello', (req, res) => {
   res.json({ message: 'Hello, World!', status: 'ok' } ); 
});
app.get('/info', (req, res) => {
   res.json({ name: 'My App', version: '1.0.0' ,author: 'John Doe',
      uptime:  process.uptime() } ); 
});

app.use((req, res) => { res.status(404).json({ error: 'Route not found' }); });
// Start listening 
app.listen(PORT, () => { 
  console.log(`Server is running at http://localhost:${PORT}`); 
}); 