const express = require('express')
const Pi = require('../models/piModel')
const router = express.Router()

// GET pi value
router.get('/', (req, res) => {
  res.json({message: 'GET pi value'})
})

// POST pi value
router.post('/', (req, res) => {
  res.json({message: 'POST pi value'})
})

// UPDATE pi value
router.patch('/', (req, res) => {
  res.json({message: 'UPDATE pi value'})
})

module.exports = router