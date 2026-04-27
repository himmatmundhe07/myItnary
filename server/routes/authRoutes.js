import express from 'express';
import { authUser, registerUser, verifyOtp, resendOtp, authGoogle, getUserProfile, completeProfile } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/verify-otp', verifyOtp);
router.post('/login', authUser);
router.post('/google', authGoogle);
router.post('/resend-otp', resendOtp);
router.get('/me', protect, getUserProfile);
router.put('/complete-profile', protect, completeProfile);

export default router;
