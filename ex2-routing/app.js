const express = require('express'); 
const app = express(); 
  
const PORT = 3000; 
  
// --- Sample data (in-memory, no database needed) --- 
const books = [ 
  { id: 1, title: 'Clean Code',       author: 'Robert C. Martin', genre: 
'Programming', year: 2008 }, 
  { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt',  genre: 
'Programming', year: 1999 }, 
  { id: 3, title: 'You Don\'t Know JS', author: 'Kyle Simpson',   genre: 
'JavaScript',  year: 2015 }, 
  { id: 4, title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', genre: 
'JavaScript', year: 2018 }, 
  { id: 5, title: 'Node.js Design Patterns', author: 'Mario Casciaro', genre: 
'Node.js', year: 2020 }, 
]; 

// Route parameters — part of the URL path 
app.get('/users/:id', (req, res) => { 
  console.log(req.params.id);  // e.g., '42' (always a string!) 
}); 
  
// Query strings — come after the '?' in the URL 
// URL: /search?name=alice&limit=10 
app.get('/search', (req, res) => { 
  console.log(req.query.name);   // 'alice' 
  console.log(req.query.limit);  // '10' (also a string) 
}); 
app.get('/books', (req, res) => { 
   res.json(books); 
});

app.get('/books/search', (req, res) => {
    const genre = req.query.genre;
    if (!genre) {
        return res.json(books); // Return all books if no genre is specified
    }
    const filteredBooks = books.filter(book => book.genre === genre);
    res.json(filteredBooks);
});

app.get('/books/:id', (req, res) => { 
   const book = books.find(b => b.id === parseInt(req.params.id)); 
   if (!book) { 
     return res.status(404).json({ error: 'Book not found' }); 
   } 
   res.json(book); 
});
app.get('/authors/:authorName/books', (req, res) => {
    const { authorName } = req.params;
    const filteredBooks = books.filter(book => book.author === authorName);
    res.json({data : filteredBooks , count : filteredBooks.length});
});

// Start listening 
app.listen(PORT, () => { 
  console.log(`Server is running at http://localhost:${PORT}`); 
}); 