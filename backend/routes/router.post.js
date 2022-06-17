const express =require("express")
const router = express.Router();

const UserController=require('../controller/userController')

const checkUserAuth =require("../middleware/auth_middleware")

// ROute Level Middleware - To Protect Route
router.use('/changepassword', checkUserAuth)
router.use('/loggeduser', checkUserAuth)


// Public Routes
router.post('/register', UserController.userRegistration)
router.post('/login', UserController.userLogin)

// Protected Routes
router.post('/changepassword', UserController.changeUserPassword)
router.get('/loggeduser', UserController.loggedUser)


// export default router
module.exports=router;
