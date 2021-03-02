# 發票管理 API 

## 標籤API功能

  | 功能 | Method |path |參數 |
  | -------- | -------- | -------- |-------- |
  | 讀取所有標籤 | GET  | {DOMAIN}/api/tag/ |  |
  | 讀取特定標籤 | GET  | {DOMAIN}/api/tag/:id |  |
  | 修改特定標籤 |  PUT | {DOMAIN}/api/tag/:id | name |
  | 刪除特定標籤 | DELETE  | {DOMAIN}/api/tag/:id |  |


- API 回應範例
    - 新增/修改/讀取成功
        ```=json
        {
            "status": "SUCCESS",
            "message": "列出所有標籤成功",
            "data": [
                {
                    "id": 1,
                    "name": "標籤1",
                    "createdAt": "2021-03-02T05:12:36.652Z",
                    "updatedAt": "2021-03-02T06:28:21.628Z"
                },
                {
                    "id": 2,
                    "name": "標籤2",
                    "createdAt": "2021-03-02T05:18:34.255Z",
                    "updatedAt": "2021-03-02T07:18:16.685Z"
                }
            ]
        }
        ```
    - 無該筆資料
        ```=json
        {
            "status": "FAIL",
            "message": "查無標籤",
            "data": null
        }
        ```
## 參考文章
- [專案架構](https://dev.to/rajandmr/node-js-rest-crud-api-with-postgres-213p)
- [上傳檔案](https://medium.com/lucideus-engineering/file-uploads-with-multer-the-complete-guide-aefe5d2f6026)
