/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "f29w8hy33s37z4f",
    "created": "2023-10-24 09:24:41.662Z",
    "updated": "2023-10-24 09:24:41.662Z",
    "name": "materiel_cadre",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4pap6ucm",
        "name": "couleur",
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
      },
      {
        "system": false,
        "id": "4nyuqak9",
        "name": "materiel",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "3p230cny0blqtr4",
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
  const collection = dao.findCollectionByNameOrId("f29w8hy33s37z4f");

  return dao.deleteCollection(collection);
})
