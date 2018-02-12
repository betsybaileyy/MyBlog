const express = require('express'); //?
import Table from '../table';

const router = express.Router();

let blogs = new Table('blog');


router.get('/:id?', (req, res) => {
    const id = req.params.id;

    if (!id) {
        blogs.getAll()
            .then((blogs) => {
                console.log(blogs);
                res.json(blogs);
            }).catch((err) => {
                console.log(err);
            });
        return;
    }

    blogs.getOne(id)
        .then((blog) => {
            res.json(blog);
        }).catch((err) => {
            console.log(err);
        });
});

router.post('/', (req, res) => {
    blogs.insert(req.body)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
        });
});

router.delete('/:id', (req, res) => {
    blogs.delete(req.params.id);

    res.sendStatus(200);
});

// router.put('/:id', (req, res) => {
//     const id = req.params.id;
//     const chirp = store.GetChirp(id);

//     if (!chirp || Object.keys(chirp).length === 0) {
//         res.sendStatus(404);
//         return;
//     }


//     console.log('here in update');
//     console.log(id);
//     console.log(req.body);

//     store.UpdateChirp(id, req.body);

//     res.sendStatus(200);
// });



module.exports = router;