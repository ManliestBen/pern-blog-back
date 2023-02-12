

async function index(req, res) {
  try {

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function create(req, res) {
  try {

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function show(req, res) {
  try {

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function deleteComment(req, res) {
  try {

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function update(req, res) {
  try {

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



