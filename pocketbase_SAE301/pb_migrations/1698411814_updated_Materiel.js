/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3p230cny0blqtr4")

  // remove
  collection.schema.removeField("xg2lzofy")

  // remove
  collection.schema.removeField("j4lfa6gx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "un6zabaa",
    "name": "materiel",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3p230cny0blqtr4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xg2lzofy",
    "name": "materiel_cadre",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j4lfa6gx",
    "name": "materiel_verres",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "polycarbonate",
        "verre"
      ]
    }
  }))

  // remove
  collection.schema.removeField("un6zabaa")

  return dao.saveCollection(collection)
})
