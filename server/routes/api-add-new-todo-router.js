const express = require('express');
const db = require('../db/models');
const router = express.Router();

router.post('/add-new-Todo', async (req, res) => {
  try {
    const { title, status } = req.body;
    const addNewTodo = await db.ToDo.create({ title, status });
    const parsed = JSON.parse(JSON.stringify(addNewTodo))
    console.log(parsed);

    res.status(200).json(parsed);
  } catch (error) {
    console.log('ERROR WHEN WE POST NEW TODO IN DB, BACK: ', error);
  }
});
module.exports = router;
