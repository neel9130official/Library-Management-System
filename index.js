const express = require('express');
// const {users} = require('./Data/users.json');


const usersRouter = require('./Routes/users');
const booksRouter = require('./Routes/books');


const app = express();
app.use(express.json());
const port = 3000;

 app.use('/users', usersRouter);
 app.use('/books', booksRouter);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
