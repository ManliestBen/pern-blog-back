const { Post } = require('../models')

async function index(req, res) {
  try {
    const cats = await Post.findAll()
    res.status(200).json(cats)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function create(req, res) {
  try {
    const post = await Post.create(req.body)
    res.status(200).json(post)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function show(req, res) {
  try {
    const post = await Post.findByPk(req.params.id)
    res.status(200).json(post)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function deletePost(req, res) {
  try {
    const post = await Post.findByPk(req.params.id)
    await post.destroy()
    res.status(200).json(post)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function update(req, res) {
  try {
    const post = await Post.findByPk(req.params.id)
    post.set(req.body)
    await post.save()
    res.status(200).json(post)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

module.exports = {
  index,
  create,
  show,
  delete: deletePost,
  update
}



