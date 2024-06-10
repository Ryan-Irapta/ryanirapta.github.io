import express from 'express';
import fs from 'fs';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// POST method to add a book
app.post('/add-book', (req, res) => {
  const { name, isbn, author, yearPublished } = req.body;

  if (!name || !isbn || !author || !yearPublished) {
    return res.send({ success: false });
  }

  const bookData = `${name},${isbn},${author},${yearPublished}\n`;
  fs.appendFile('books.txt', bookData, (err) => {
    if (err) {
      return res.send({ success: false });
    }
    res.send({ success: true });
  });
});

// GET method to find a book by ISBN and Author
app.get('/find-by-isbn-author', (req, res) => {
  const { isbn, author } = req.query;

  if (!isbn || !author) {
    return res.send([]);
  }

  fs.readFile('books.txt', 'utf8', (err, data) => {
    if (err) {
      return res.send([]);
    }
    const books = data.split('\n').filter((line) => line !== '');
    const foundBook = books.find((line) => {
      const [name, isbnValue, authorValue, yearPublished] = line.split(',');
      return isbnValue === isbn && authorValue === author;
    });
    res.send(foundBook ? [foundBook] : []);
  });
});

// GET method to find a book by Author
app.get('/find-by-author', (req, res) => {
  const { author } = req.query;

  if (!author) {
    return res.send([]);
  }

  fs.readFile('books.txt', 'utf8', (err, data) => {
    if (err) {
      return res.send([]);
    }
    const books = data.split('\n').filter((line) => line !== '');
    const foundBooks = books.filter((line) => {
      const [, , authorValue] = line.split(',');
      return authorValue === author;
    });
    res.send(foundBooks);
  });
});

app.listen(3000, () => {
  console.log('Server started at port 3000');
});