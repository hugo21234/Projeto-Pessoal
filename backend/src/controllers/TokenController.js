import LoginService from '../services/LoginService.js';

class TokenController {

    static async store(req, res) {
        try {
          const { email, password } = req.body;
            const { token, user } = await LoginService.login(email, password);
            res.json({ token, user });
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    }
}
export default TokenController;
