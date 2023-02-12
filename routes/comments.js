const router = require('express').Router()
const commentsCtrl = require('../controllers/comments.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, commentsCtrl.index)
router.get('/:id', checkAuth, commentsCtrl.show)
router.post('/', checkAuth, commentsCtrl.create)
router.delete('/:id', checkAuth, commentsCtrl.delete)
router.put('/:id', checkAuth, commentsCtrl.update)

module.exports = router
