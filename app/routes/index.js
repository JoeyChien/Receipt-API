const express = require("express");
const router = express.Router();
const receipts = require("../controllers/receipts.controller.js");
const tags = require("../controllers/tags.controller.js");
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

/* 發票功能 */ 
router.post("/receipts/", upload.single("receipt"), receipts.create);
router.get("/receipts/", receipts.findAll);
// router.put("/receipts/:id", receipts.update);

/* 標籤功能 */ 
router.post("/tag/", tags.create);
router.get("/tag/", tags.findAll);
router.get("/tag/:id", tags.findOne);
router.put("/tag/:id", tags.update);
router.delete("/tag/:id", tags.delete);

module.exports = router;
