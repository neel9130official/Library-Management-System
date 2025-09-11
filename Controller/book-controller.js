const {bookModel,userModel} = require('../Models');

exports.getAllBooks =async (req,res) => {
    const books = await bookModel.find({});
    if(books.length === 0){
        return res.status(404).json({
            success: false,
            message: "No books found"
        });
    }
    return res.status(200).json({
        success: true,
        data: books
    });
}

exports.allIssuedBooks=async(req,res) => {

   const users= await userModel.find({
    issuedbook:{$exists:true}
   }).populate("issuedbook");
   const issuedBooks=users.map((each)=>{
    return new issuedBook(each);
   })
   if(issuedBooks.length===0){
    return res.status(404).json({
        success:false,
        message:"No books are issued"
    })}
    return res.status(200).json({
        success:true,
        data:issuedBooks,
        message:"Issued books retrieved successfully"
    });


}

// exports.addBook = async (req, res) => {
//     const {data} = req.body;
//     if(!data.name || !data.author || !data.genere||!data.price||!data.publisher){
//         return res.status(400).json({
//             success: false,
//             message: "Title, author and genre are required"
//         });
//     } 
//     const { name, author, genere,price, publisher } = req.body;
//     const book = new bookModel({ name, author, genere,price,publisher });
//     await book.save();
//     res.status(201).json({
//         success: true,
//         data: book,
//         message: "Book added successfully"
//     });
// }
exports.addBook = async (req, res) => {
    try {
        const { data } = req.body;

        // ✅ Correct validation - use "genere" not "genre"
        if (!data.name || !data.author || !data.genere || !data.price || !data.publisher) {
            return res.status(400).json({
                success: false,
                message: "Name, author, genere, price, and publisher are required"
            });
        }

        // ✅ Correctly use data object to create book
        const book = new bookModel({
            name: data.name,
            author: data.author,
            genere: data.genere,
            price: data.price,
            publisher: data.publisher
        });

        await book.save();

        res.status(201).json({
            success: true,
            data: book,
            message: "Book added successfully"
        });

    } catch (error) {
        console.error("Error while adding book:", error);
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        });
    }
};


exports.deleteBook=async(req,res)=>{
    const {id}=req.params;
    const book=await bookModel.findById(id);
    if(!book){
        return res.status(404).json({
            success:false,
            message:"Book not found"
        });
    }
    await bookModel.findByIdAndDelete(id);
    return res.status(200).json({
        success:true,
        message:"Book deleted successfully"
    });
}
