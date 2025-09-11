const express=require('express');
const {users} = require('../Data/users.json');
const { getAllUsers, getUserById,createUser, updateUser, deleteUser } = require('../Controller/user-controller');

const router=express.Router();

// router.get('/', (req, res) => {
//   res.status(200).json({
//     message: "Home Page",
//     data: users
//   });
// });


// router.get('/', (req, res) => {
//   res.status(200).json({
//     success: true,
//     data: users
//   });
// });
router.get('/', getAllUsers);


// router.get('/:id', (req, res) => {
//   const { id } = req.params;
//   const user = users.find((each) => each.id === Number(id));

//   if (!user) {
//     return res.status(404).json({
//       success: false,
//       message: "User not found"
//     });
//   }

//   res.status(200).json({
//     success: true,
//     data: user
//   });
// });
router.get('/:id', getUserById);

// router.post('/', (req, res) => {
//   const { id, name, email, role, isActive } = req.body;

  
//   const user = users.find((each) => each.id === Number(id));
//   if (user) {
//     return res.status(400).json({   
//       success: false,
//       message: "User already exists"
//     });
//   }

  
//   if (!id || !name || !email || !role || isActive === undefined) {   
//     return res.status(400).json({
//       success: false,
//       message: "All fields are required"
//     });
//   }

  
//   users.push({ id, name, email, role, isActive });

//   res.status(201).json({
//     success: true,
//     message: "User created successfully"
//   });
// });
router.post('/', createUser);


// router.put('/users/:id', (req, res) => {
//   const { id } = req.params;
//   const {body} = req.body;

//   const user= users.find((each) => each.id === Number(id));
//   if (!user) {
//     return res.status(404).json({
//       success: false,
//       message: "User not found"
//     });
//   }

//   const updatedUser= users.map((each) => {
//     if (each.id === Number(id)) {
//       return { ...each, ...body };
//     }

//     return each;
// })
//   res.status(200).json({
//     success: true,
//     data: updatedUser,
//     message: "User updated successfully"
    
//   });
// })

router.put('/users/:id', updateUser)


// router.delete('/users/:id', (req, res) => {
//   const { id } = req.params;


//   const user = users.find((each) => each.id === Number(id));

//   if (!user) {
//     return res.status(404).json({
//       success: false,
//       message: "User not found"
//     })};
  

// // const updatedUsers = users.filter((each) => each.id !== Number(id));

//   const index = users.indexOf(user);
//   users.splice(index, 1);
//   const updatedUsers = users;

//   res.status(200).json({
//     success: true,
//     data: updatedUsers,
//     message: "User deleted successfully"
//   });

// })
router.delete('/users/:id', deleteUser)

module.exports=router;