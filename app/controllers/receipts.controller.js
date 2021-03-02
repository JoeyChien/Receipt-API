const db = require("../models");
const Receipts = db.receipts;
const Op = db.Sequelize.Op;
const fs = require("fs");

exports.loadfile = (req, res, next) => {
  var file = req.file;
    // var user_id = req.user_id; 
  // var tag_id = req.tag_id; 
  var contentIndex = [];
  var txtLine = [];
  var store_info = "";
  var transaction_time = "";
  var receipt_id_no = "";
  var content = "";
  var total = "";
  var payment_id = "";

  if (!file) { 
    const error = new Error("請上傳檔案");
    error.httpStatusCode = 400;
    return next(error);
  }

  var data = fs.readFileSync(req.file.path).toString();
  txtLine = data.split("\r\n");
 
  for (i in txtLine) {
    if (txtLine[i] == "" ||
        txtLine[i] == "------------------------" ||
        txtLine[i] == "+----------------------------------------------+") {
      contentIndex.push(i);
    }
    if (txtLine[i] == "--- Thank You & Have A Nice Day ---") break;
  }

  store_info = txtLine.slice(0, contentIndex[0]);
  transaction_time = txtLine.slice(contentIndex[0], contentIndex[1]);
  res.send(store_info);
  
};

exports.create = (req, res, next) => { 
  console.log("receiptFile"); 
  if (!req.body.user_id) {
    res.status(400).send({
      message: "Content can not be empty !",
    });
    return;
  }

  const receipt = {
    user_id: req.body.user_id,
    tag_id: req.body.tag_id,
    store_info: req.body.store_info,
    transaction_time: req.body.transaction_time,
    receipt_id_no: req.body.receipt_id_no,
    content: req.body.content,
    total: req.body.total,
    payment_id: req.body.payment_id,
  };

  Receipts.create(receipt)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while create the Notes",
      });
    });
};

// exports.findAll = (req, res) => {
//   const title = req.query.title;

//   Receipts.findAll()
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Some error occured while retrieving Notes",
//       });
//     });
// };

// exports.findOne = (req, res) => {
//   const id = req.params.id;
//   Receipts.findByPk(id)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Error retrieving Notes with id=" + id,
//       });
//     });
// };

// exports.update = (req, res) => {
//   const id = req.params.id;

//   Receipts.update(req.body, {
//     where: { id: id },
//   }).then((data) => {
//     if (data) {
//       res.send({
//         message: "Note was updated successfully",
//       });
//     } else {
//       res.send({
//         message: `Cannot update Note with id=${id}`,
//       });
//     }
//   });
// };

// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Receipts.destroy({
//     where: { id: id },
//   }).then((data) => {
//     if (data) {
//       res.send({
//         message: "Note was delete successfully!",
//       });
//     } else {
//       res.send({
//         message: `Cannot delete Note with id=${id}`,
//       });
//     }
//   });
// };
