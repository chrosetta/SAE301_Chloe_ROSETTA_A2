/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xwjiqrj1osfbbh8",
    "created": "2023-10-25 07:51:00.431Z",
    "updated": "2023-10-25 07:51:00.431Z",
    "name": "Avis",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fsu306z9",
        "name": "note",
        "type": "number",
        "required": false,
        "presentable": true,
        "unique": false,
        "options": {
          "min": 0,
          "max": 5,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "t5s49cv3",
        "name": "nom",
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
        "id": "4lnsdviq",
        "name": "commentaire",
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
  const collection = dao.findCollectionByNameOrId("xwjiqrj1osfbbh8");

  return dao.deleteCollection(collection);
})
