const router = require('express').Router()
const postsCtrl = require('../controllers/posts.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, postsCtrl.index)
router.get('/:id', checkAuth, postsCtrl.show)
router.post('/', checkAuth, postsCtrl.create)
router.delete('/:id', checkAuth, postsCtrl.delete)
router.put('/:id', checkAuth, postsCtrl.update)

module.exports = router
