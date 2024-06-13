import express from 'express'
import {
  getUsers,
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

export default router
