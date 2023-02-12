const { Comment, Profile } = require('../models')

async function index(req, res) {
  try {
    const comments = await Comment.findAll({
      include: {model: Profile, as: 'author'}
    })
    res.status(200).json(comments)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function create(req, res) {
  try {
    req.body.authorId = req.user.profile.id
    const comment = await Comment.create(req.body)
    res.status(200).json(comment)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function show(req, res) {
  try {
    const comment = await Comment.findByPk(
      req.params.id,
      {include: {model: Profile, as: 'author'}}
    )
    res.status(200).json(comment)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function deleteComment(req, res) {
  try {
    const comment = await Comment.findByPk(req.params.id)
    await comment.destroy()
    res.status(200).json(comment)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function update(req, res) {
  try {
    const comment = await Comment.findByPk(
      req.params.id,
      {include: {model: Profile, as: 'author'}}
    )
    comment.set(req.body)
    comment.save()
    res.status(200).json(comment)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

module.exports = {
  index,
  create,
  show,
  delete: deleteComment,
  update,
}



