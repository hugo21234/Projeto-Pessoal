import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserService from '../services/UserService.js';
import LoginService from '../services/LoginService.js';

class TokenController {

    static async store(req, res) {
        try {
            const { email, password } = req.body;
            const token = await LoginService.login(email, password);
            res.json({ token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
export default TokenController; 