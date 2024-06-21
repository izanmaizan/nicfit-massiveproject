import express from 'express'
import {
  getUsers,
<<<<<<< HEAD
  Register,
  Login,
  Me,
  Logout,
  updateUsersWithToken,
  deleteUser,
  updatepassword,
} from '../controllers/Users.js'

const router = express.Router()

router.get('/users', getUsers)
router.post('/register', Register)
router.post('/login', Login)
router.get('/me', Me)
router.post('/logout', Logout)
router.put('/user/update', updateUsersWithToken)
router.put('/user/password', updatepassword)
router.delete('/user/delete', deleteUser)
=======
  Login,
  Logout,
  Me,
  Register,
  deleteUser,
  updateUsersWithToken,
} from '../controllers/Users.js'
import { verifyToken } from '../middleware/VerifyToken.js'

const router = express.Router()

// users
router.get('/users', getUsers) // done
router.get('/me', verifyToken, Me) // done
router.post('/users', Register) // done
router.post('/login', Login) // done
router.post('/logout', verifyToken, Logout) // done
router.put('/update/:id', verifyToken, updateUsersWithToken) // done
router.delete('/delete', verifyToken, deleteUser)
>>>>>>> 4600dbc6ebf83b0c9020f625487e4753deb1ecc5

export default router
