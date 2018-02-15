import { Router } from 'express';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
import Table from '../table';

let router = Router();

let users = new Table('users');

router.get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
    res.json(req.user);
});

router.post('/', (req, res) => { //isLoggedIn
    users.insert(req.body)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
        });
});

export default router;