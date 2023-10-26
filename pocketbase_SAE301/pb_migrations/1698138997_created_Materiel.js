/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3p230cny0blqtr4",
    "created": "2023-10-24 09:16:37.019Z",
    "updated": "2023-10-24 09:16:37.019Z",
    "name": "Materiel",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xg2lzofy",
        "name": "libelle_materiel",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "métal",
            "titane"
          ]
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
  const collection = dao.findCollectionByNameOrId("3p230cny0blqtr4");

  return dao.deleteCollection(collection);
})
