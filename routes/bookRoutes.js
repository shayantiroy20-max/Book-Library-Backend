const express = require("express");

const {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

const router = express.Router();

// GET all books
router.get("/", getBooks);

// POST new book
router.post("/", createBook);

// UPDATE book
router.put("/:id", updateBook);

// DELETE book
router.delete("/:id", deleteBook);

module.exports = router;