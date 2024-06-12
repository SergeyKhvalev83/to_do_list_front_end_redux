const express = require('express');
const db = require('../db/models');
const router = express.Router();

router.get('/get-all-toDoes', async (req, res) => {
  try {
    const allToDoes = await db.ToDo.findAll();
    const parsed = JSON.parse(JSON.stringify(allToDoes));
    console.log(parsed)
    res.status(200).json(parsed);
  } catch (error) {
    console.log('ERROR WHEN TRY TO RETRIEVE ALL TODOES, BACK: ', error);
  }
});

module.exports = router;
