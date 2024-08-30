import express from 'express'
import { forgotPassword, loginUser, registerUser, resetPassword } from '../Controller/userController.js';

const router = express.Router();

router.post('/register-user',registerUser)
router.post('/login-user',loginUser)
router.post('/forgot-password',forgotPassword)
router.put('/reset-password/:id/:token',resetPassword)

export default router;