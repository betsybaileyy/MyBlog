const express = require('express'); //?
import Table from '../table';
import { isLoggedIn } from '../middleware/auth.mw';

const router = express.Router();

let blogTable = new Table('blog');
let tagsTable = new Table('tags');
let blogTagsTable = new Table('blogtags');

router.get('/:id?', (req, res) => {
    const id = req.params.id;

    if (!id) {
        blogTable
            .getAll()
            .then((blogs) => {
                console.log(blogs);
                res.json(blogs);
            })
            .catch((err) => {
                console.log(err);
                res.sendStatus(500);
            });
        return;
    }

    // get blog
    // find blogtags with blog.id
    // iterate through blogtags
    //   get tag
    // set blog.tags = tags

    let post;

    // get blog
    blogTable
        .getOne(id)
        .then((blog) => {
            post = blog;

            if (!blog) {
                res.sendStatus(404);
                return;
            }

            // find blogtags with blog.id
            return blogTagsTable.find({
                blogid: blog.id,
            });
        })
        .then((blogTags) => {
            // iterate through blogtags
            return Promise.all(blogTags.map((bt) => {
                // get tag
                return tagsTable.getOne(bt.tagid);
            }));
        }).then((tags) => {
            // set blog.tags = tags
            post.tags = tags;

            return post;
        })
         .then((blog) => {
            res.json(blog);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

// insert a new post, get id
// go through the array of tags
//   check if a tag is in the database
//   if tag in database, get id
//   if tag not in database, insert tag, get id
//   insert into blogtags with new post id and tag id
router.post('/', (req, res) => {
    //isLoggedIn
    let post = {
        title: req.body.title,
        content: req.body.content,
    };

    let tags = req.body.tags;

    // insert a new post, get id 
    blogTable
        .insert(post)
        .then((result) => {
            // get id
            let postid = result.id;

            // go through the array of tags
            return Promise.all(
                tags.map((tag) => {
                    // check if a tag is in the database
                    return tagsTable
                        .find(tag)
                        .then((results) => {
                            if (results.length > 0) {
                                // if tag in database
                                return results[0];
                            } else {
                                // if tag not in database, insert tag
                                return tagsTable.insert(tag);
                            }
                        })
                        .then((tag) => {
                            // get id
                            let tagid = tag.id;

                            // insert into blogtags with new post id and tag id
                            return blogTagsTable.insert({
                                blogid: postid,
                                tagid,
                            });
                        });
                })
            ).then(() => {
                return result;
            });
        })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

// delete all blogtags with post id
// delete post
router.delete('/:id', (req, res) => {
    blogTable
        .delete(req.params.id)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

// update post
// delete all blogtags with post id
// go through the array of tags
//   check if a tag is in the database
//   if tag in database, get id
//   if tag not in database, insert tag, get id
//   insert into blogtags with post id and tag id
router.put('/:id', (req, res) => {
    const id = req.params.id;

    let post = {
        title: req.body.title,
        content: req.body.content,
    };

    blogTable
        .update(id, post)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

module.exports = router;
