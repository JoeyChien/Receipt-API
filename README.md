# 發票管理 API 
 
## 規劃資料

### [ERD](https://drawsql.app/nope-1/diagrams/receipt-full-ver)

### 參考文章
- [專案架構](https://dev.to/rajandmr/node-js-rest-crud-api-with-postgres-213p)
- [上傳檔案](https://medium.com/lucideus-engineering/file-uploads-with-multer-the-complete-guide-aefe5d2f6026)

## API文件

### 標籤API功能

  | 功能 | Method |path |參數 |
  | -------- | -------- | -------- |-------- |
  | 新增標籤 | POST  | {DOMAIN}/api/tag/ | name |
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
### 發票API功能

  | 功能 | Method |path |參數 |備註 |
  | -------- | -------- | -------- |-------- |-------- |
  | 上傳發票 | POST  | {DOMAIN}/api/receipt/ | name |  |
  | 讀取所有發票 | GET  | {DOMAIN}/api/receipt/ | tag_id (可略) |  有帶tag_id參數則找所有該標籤發票|
  | 修改特定發票的標籤 |  PUT | {DOMAIN}/api/receipt/:id | tag_id |  |

- API 回應範例
    - 上傳/修改/讀取成功
        ```=json
        {
            "status": "SUCCESS",
            "message": "發票上傳成功",
            "data": {
                "id": 17,
                "user_id": 1,
                "tag_id": 3,
                "store_info": "Bob's Store\nTel :0123456789\nGST Reg.:0123456789",
                "transaction_time": "Date:13.06.2020  Time:20:11:09",
                "receipt_id_no": 122769,
                "content": "8888196173423 Pokka Green Tea Jasmine 1.5L\n1 x 2.20                                    2.20\n9556404001156 Pepsi 1.5L\n1 x 2.20                                    2.20\n5000277001156 Dewars White Label 750ml\n1 x 49.00                                  49.00\n\nVISA          SubTotal:                    53.40\nITEMS(3)  QTY(3)",
                "total": 53.4,
                "updatedAt": "2021-03-02T16:03:56.966Z",
                "createdAt": "2021-03-02T16:03:56.966Z"
            }
        }
        ```
    - 無該筆資料
        ```=json
        {
            "status": "FAIL",
            "message": "查無發票",
            "data": null
        }
        ```
