const express=require('express');
const {books} = require('../Data/books.json');
const {users}= require('../Data/users.json');
const IssuedBook =require('../DTO/book-dto');

const {userModel, bookModel}= require('../Models');
const { getAllBooks, allIssuedBooks, addBook,deleteBook } = require('../Controller/book-controller');

const router=express.Router();

// router.get('/', (req, res) => {
//   res.status(200).json({
//     message: "Home Page",
//     data: books
//   });
router.get('/', getAllBooks);

// router.post('/', (req, res) => {
//   const { id, title, author, price, publisher, genere} = req.body;

  
//   const book = books.find((each) => each.id === Number(id));
//   if (book) {
//     return res.status(400).json({   
//       success: false,
//       message: "Book already exists"
//     });
//   }

  
//   if (!id || !title || !author || !price || !publisher || !genere === undefined) {   
//     return res.status(400).json({
//       success: false,
//       message: "All fields are required"
//     });
//   }

  
//   books.push({ id, title, author, price, publisher, genere });

//   res.status(201).json({
//     success: true,
//     message: "Books created successfully"
//   });
// });

// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const {body} = req.body;

//   const book= books.find((each) => each.id === Number(id));
//   if (!book) {
//     return res.status(404).json({
//       success: false,
//       message: "book not found"
//     });
//   }

//   const updatedbook= books.map((each) => {
//     if (each.id === Number(id)) {
//       return { ...each, ...body };
//     }

//     return each;
// })
//   res.status(200).json({
//     success: true,
//     data: updatedbook,
//     message: "book updated successfully"
    
//   });
// })

//Updating the book by its id
router.post('/', addBook);

router.put('/books/:id', (req, res) => {

const {id, title, author, price, publisher, genere}=req.body

const book= books.find((each) => each.id === Number(id));
if (!id || !title || !author || !price || publisher || genere === undefined) {
  return res.status(404).json({
    success: false,
    message: "book not found"
  });
}
const updatedbook= books.map((each) => {
  if (each.id === Number(id)) {
    return { ...each, ...body };
  }
    return each;
})
res.status(200).json({
    success: true,
    data: updatedbook,
    message: "book updated successfully"
})
})

router.put('/issuedbooks/:id', (req, res)=> {
  const {id, available}=req.body
  const book= books.find((each) => each.id === Number(id));
  
  if (!id || available === undefined) {
    return res.status(404).json({
      success: false,
      message: "book not found"
    });
  }
  const updatedbook= books.map((each) => {
    if (each.id === Number(id)) {
      return { ...each, available: false };
    }
      return each;
  })
  res.status(200).json({
      success: true,
      data: updatedbook,
      message: "book issued successfully"
  })
})




//  router.delete('/:id', (req, res) => {

   router.delete('/:id', deleteBook )
//   const { id } = req.params;


//   const book = books.find((each) => each.id === Number(id));

//   if (!book) {
//     return res.status(404).json({
//       success: false,
//       message: "book not found"
//     })};
  

// // const updatedbooks = books.filter((each) => each.id !== Number(id));

//   const index = books.indexOf(book);
//   books.splice(index, 1);
//   const updatedbooks = books;

//   res.status(200).json({
//     success: true,
//     data: updatedbooks,
//     message: "book deleted successfully"
//   });

// })

// router.get('/issued/for-users', (req, res) => {
//   // const issuedBooks = books.filter((each) => each.available === false);
//   const userWithIssuedBooks = users.filter((each) =>{
//     if(each.issuedBook){
//       return each;
//     }
    
//   })

//   const issuedBooks = [];
//   userWithIssuedBooks.forEach((each) => {
//     const book = books.find((book) => book.id === Number(each.issuedBook));
//     book.issuedBy = each.name;
//     book.issuedDate = each.issuedDate;
//     book.returnDate = each.returnDate;
//     issuedBooks.push(book);
//   })

//   if(!issuedBooks){
//     return res.status(404).json({
//       success: false,
//       message: "No books are issued"
//   })}

//   res.status(200).json({
//     success: true,
//     data: issuedBooks,
//     message: "Issued books retrieved successfully"
//   });
// });
router.get('/issued/for-users', allIssuedBooks)

  



module.exports=router;