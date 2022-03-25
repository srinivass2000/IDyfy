const express = require("express");
const router = express.Router();

const { get_doc } = require("../controllers/docs/serve_docs");

// const { testing_model } = require("../utils/model_testing");

router.route("/:filename").get(get_doc);

module.exports = router;
