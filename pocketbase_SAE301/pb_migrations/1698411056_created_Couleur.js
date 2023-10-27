/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2uevx9e9w9ztr33",
    "created": "2023-10-27 12:50:56.913Z",
    "updated": "2023-10-27 12:50:56.913Z",
    "name": "Couleur",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hkgtcian",
        "name": "couleur_cadre",
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
  const collection = dao.findCollectionByNameOrId("2uevx9e9w9ztr33");

  return dao.deleteCollection(collection);
})
