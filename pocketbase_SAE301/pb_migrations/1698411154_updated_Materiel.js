/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3p230cny0blqtr4")

  // update
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

  // update
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3p230cny0blqtr4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xg2lzofy",
    "name": "libelle_materiel_cadre",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j4lfa6gx",
    "name": "libelle_materiel_verres",
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

  return dao.saveCollection(collection)
})
