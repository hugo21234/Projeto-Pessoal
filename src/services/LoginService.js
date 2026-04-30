import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserService from './UserService.js';
class LoginService {

    static async login(email, password) {
        const user = await UserService.findByEmail(email);
        if (!user || bcrypt.compareSync(password, user.password_hash) === false) {
            throw new Error('Invalid email or password');
        }
        const token  = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7days' });
        return token;
    }
}

export default LoginService;