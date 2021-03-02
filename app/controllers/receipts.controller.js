const db = require("../models");
const Receipts = db.receipts;
const Op = db.Sequelize.Op;
const fs = require("fs");

exports.create = (req, res, next) => {
  var file = req.file;
  var contentIndex = [];
  var txtLine = [];
  var store_info = "";
  var transaction_time = "";
  var receipt_id_no = "";
  var content = "";
  var total = "";

  if (!file) { 
    res.json({ 
      status: "FAIL",
      message: "請上傳檔案",
      data: data
    });
  }
  /* 整理txt檔案內資訊 */
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

  store_info = txtLine.slice(0, contentIndex[0]).join("\n");
  transaction_time = txtLine[parseInt(contentIndex[0]) + 1]; 
  receipt_id_no = txtLine[parseInt(contentIndex[1]) - 1].replace("Receipt ID:","").trim();
  content = txtLine.slice(parseInt(contentIndex[1]) + 1, contentIndex[3]).join("\n");
  total = txtLine[parseInt(contentIndex[3]) + 1].replace("Total : ","").trim();

  const receipt = {
    user_id: req.body.user_id,
    tag_id: req.body.tag_id,
    store_info: store_info,
    transaction_time: transaction_time,
    receipt_id_no: receipt_id_no,
    content: content,
    total: total
  };

  Receipts.create(receipt)
    .then((data) => {
      res.json({ 
        status: "SUCCESS",
        message: "發票上傳成功",
        data: data
      });
    })
    .catch((err) => {
      res.json({ 
        status: "FAIL",
        message:  err.message || "發票上傳失敗",
        data: null
      });
    });
};

exports.findAll = (req, res) => {
  Receipts.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving Notes",
      });
    });
};

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
