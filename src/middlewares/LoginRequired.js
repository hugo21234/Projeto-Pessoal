import jsonwebtoken from 'jsonwebtoken';
import { canTreatArrayAsAnd } from 'sequelize/lib/utils';

async function LoginRequired(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: 'Token not provided' });
    }
const [, token] = authorization.split(' ');
    try{
        const dados = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        const { id, email } = dados;
        const user = await UserService.findByone({id,email});
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }
        req.user = dados;
        req.useremail = email;
        req.userid =id;
        return next();
    }catch(error){
        return res.status(401).json({ error: 'Invalid token' });
    }
}