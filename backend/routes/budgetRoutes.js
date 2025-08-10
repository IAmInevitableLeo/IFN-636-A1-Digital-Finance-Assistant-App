const express = require('express');
const { getBudgets, addBudget, updateBudget, deleteBudget } = require('../controllers/budgetController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
  .get(protect, getBudgets)
  .post(protect, addBudget);

router.route('/:id')
  .put(protect, updateBudget)
  .delete(protect, deleteBudget);

module.exports = router;
