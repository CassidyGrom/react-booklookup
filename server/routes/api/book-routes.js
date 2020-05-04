const router = require("express").Router();
const {getAllBooks, saveBook, deleteBook} = require("../../controllers/book-controller");

//for Get/api/books
router.route("/").get(getAllBooks).post(saveBook);

router.route("/:id").delete(deleteBook);

module.exports = router;