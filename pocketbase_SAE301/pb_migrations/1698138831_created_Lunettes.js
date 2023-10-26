/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qnpzx5kdglu5tvn",
    "created": "2023-10-24 09:13:51.051Z",
    "updated": "2023-10-24 09:13:51.052Z",
    "name": "Lunettes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yu2aayb4",
        "name": "cadre_lunettes",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "zqhwlwpq",
        "name": "verres_lunettes",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "mx3quhjb",
        "name": "branches_lunettes",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("qnpzx5kdglu5tvn");

  return dao.deleteCollection(collection);
})
