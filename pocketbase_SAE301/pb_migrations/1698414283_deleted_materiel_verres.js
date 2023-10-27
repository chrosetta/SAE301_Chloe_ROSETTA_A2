/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("loct8h4sd2u738q");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "loct8h4sd2u738q",
    "created": "2023-10-24 10:30:45.646Z",
    "updated": "2023-10-24 10:30:45.646Z",
    "name": "materiel_verres",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mwxyi1i0",
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
      },
      {
        "system": false,
        "id": "5rzsjgey",
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
})
