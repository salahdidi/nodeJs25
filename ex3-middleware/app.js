 
const express = require('express'); 
const { log } = require('./Middleware/logger');
const { timing } = require('./Middleware/timing');
const { auth } = require('./Middleware/requireAuth');
const app = express(); 


// --- Built-in middleware: parse JSON request bodies 
app.use(express.json()); 
  
// ── TODO 3.1: Add your logger middleware here ── 
app.use(log);
  
// ── TODO 3.2: Add your timing middleware here ── 
  
app.use(timing);
  
// Public routes (no auth required) 
app.get('/', (req, res) => res.json({ message: 'Public homepage' })); 
app.get('/public', (req, res) => res.json({ message: 'Anyone can see this' })); 
app.get('/admin/dashboard',auth, (req, res) => res.json({ message: 'About us' }));
  
// ── TODO 3.3: Add your auth middleware as a route-level guard ── 
// Protected routes go here 



app.listen(3000, () => console.log('Server on http://localhost:3000')); 