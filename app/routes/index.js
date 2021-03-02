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
router.post("/receipt/", upload.single("receipt"), receipts.create);
router.get("/receipt/", receipts.findAll);
router.put("/receipt/:id", receipts.update);

/* 標籤功能 */ 
router.post("/tag/", tags.create);
router.get("/tag/", tags.findAll);
router.get("/tag/:id", tags.findOne);
router.put("/tag/:id", tags.update);
router.delete("/tag/:id", tags.delete);

module.exports = router;
