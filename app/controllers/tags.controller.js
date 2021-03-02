const db = require("../models");
const Tags = db.tags;

exports.create = (req, res) => { 
  if (!req.body.name) {
    res.json({ 
      status: "FAIL",
      message: "標籤名稱不得為空",
      data: null
    });
    return;
  }

  const tag = {
    name: req.body.name,
  };

  Tags.create(tag)
    .then((data) => {
      res.json({ 
        status: "SUCCESS",
        message: "標籤建立成功",
        data: data
      });
    })
    .catch((err) => {
      res.json({ 
        status: "FAIL",
        message:  err.message || "標籤建立失敗",
        data: null
      });
    });
};

exports.findAll = (req, res) => {
  Tags.findAll()
    .then((data) => {
      res.json({ 
        status: "SUCCESS",
        message: "列出所有標籤成功",
        data: data
      });
    })
    .catch((err) => {
      res.json({ 
        status: "FAIL",
        message:  err.message || "列出所有標籤失敗",
        data: null
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Tags.findByPk(id)
    .then((data) => {
      if (!data) {
        res.json({ 
          status: "FAIL",
          message: "查無標籤",
          data: null
        });
      }
      res.json({ 
        status: "SUCCESS",
        message: "查找標籤成功",
        data: data
      });
    })
    .catch((err) => {
      res.json({ 
        status: "FAIL",
        message:  err.message || "查找標籤失敗",
        data: null
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Tags.findByPk(id)
    .then((data) => {
      if (!data) {
        res.json({ 
          status: "FAIL",
          message: "查無標籤",
          data: null
        });
      } else {
        data.update(
          { name: req.body.name }
        )
        .then((data) => {
          if (data) {
            res.json({ 
              status: "SUCCESS",
              message: "更新標籤成功",
              data: null
            });
          } else {
            res.json({ 
              status: "FAIL",
              message: "更新標籤失敗",
              data: null
            });
          }
        });
      }
    })
    .catch((err) => {
      res.json({ 
        status: "FAIL",
        message:  err.message,
        data: null
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Tags.findByPk(id)
  .then((data) => {
    if (!data) {
      res.json({ 
        status: "FAIL",
        message: "查無標籤",
        data: null
      });
    } else {
      data.destroy(
        { where: { id: id } }
      )
      .then((data) => {
        if (data) {
          res.json({ 
            status: "SUCCESS",
            message: "刪除標籤成功",
            data: null
          });
        } else {
          res.json({ 
            status: "FAIL",
            message: "刪除標籤失敗",
            data: null
          });
        }
      });
    }
  })
  .catch((err) => {
    res.json({ 
      status: "FAIL",
      message:  err.message,
      data: null
    });
  });
};
