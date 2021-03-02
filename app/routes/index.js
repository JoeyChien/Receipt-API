const express = require("express");
const router = express.Router();
const receipts = require("../controllers/receipts.controller.js");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.txt')
  }
})

var upload = multer({ storage: storage });

router.post("/", receipts.create);

router.post("/upload", upload.single("receipt"), receipts.loadfile);


// router.get("/", receipts.findAll);

// router.get("/:id", receipts.findOne);

// router.put("/:id", receipts.update);

// router.delete("/:id", receipts.delete);

module.exports = router;
