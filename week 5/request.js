import needle from 'needle';

const data = {
  name: 'Harry Potter and the Philisopher Stone',
  isbn: '978-0-7475-3269-9',
  author: 'J.K Rowling',
  yearPublished: 1997

};

needle.post('http://localhost:3000/add-book', data, 
{ json: true }, 
(err, resp) => {
  if (err) {
    console.error(err);
  } else {
    console.log(resp.body);
  }
});


needle.get('http://localhost:3000/find-by-isbn-author', {
  query: {
    isbn: '978-0-7475-3269-9',
    author: 'J.K Rowling'
  }
}, (err, resp) => {
  if (err) {
    console.error(err);
  } else {
    console.log(resp.body);
  }
});

needle.get('http://localhost:3000/find-by-author', {
  query: {
    author: 'J.K Rowling'
  }
}, (err, resp) => {
  if (err) {
    console.error(err);
  } else {
    console.log(resp.body);
  }
});