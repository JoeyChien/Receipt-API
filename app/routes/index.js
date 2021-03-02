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
router.post("/receipts", receipts.create);
router.post("/receipts/upload", upload.single("receipt"), receipts.loadfile);
// router.get("/receipts/", receipts.findAll);
// router.get("/receipts/:id", receipts.findOne);
// router.put("/receipts/:id", receipts.update);
// router.delete("/receipts/:id", receipts.delete);

/* 標籤功能 */ 
router.post("/tag", tags.create);
router.get("/tag/", tags.findAll);
router.get("/tag/:id", tags.findOne);
// router.put("/tag/:id", tags.update);
// router.delete("/tag/:id", tags.delete);

module.exports = router;
