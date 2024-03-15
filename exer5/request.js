import needle from 'needle';

needle.get('http://localhost:3000/', 
(err, res) => {
    console.log(res.body);   // prints the body of the response message. In this case, “Hello”
});

needle.post(
    'http://localhost:3000/submit-data',
    { name: 'Monina' ,
    age: '23 years old'},   // can be an object or a string
    (err, res) => {
      console.log(res.body);
    }
  );
  