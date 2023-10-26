/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "p5k2tcv16s7iyhe",
    "created": "2023-10-24 09:25:24.698Z",
    "updated": "2023-10-24 09:25:24.698Z",
    "name": "compose",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wkk8safu",
        "name": "user",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "8fi6wpxh",
        "name": "lunettes",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "qnpzx5kdglu5tvn",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("p5k2tcv16s7iyhe");

  return dao.deleteCollection(collection);
})
