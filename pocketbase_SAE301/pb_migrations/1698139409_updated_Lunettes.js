/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qnpzx5kdglu5tvn")

  // remove
  collection.schema.removeField("yu2aayb4")

  // remove
  collection.schema.removeField("mx3quhjb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "if1uvq0f",
    "name": "cadre_lunettes",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "blanc",
        "bleu",
        "rouge",
        "vert",
        "jaune",
        "violet"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nminso1a",
    "name": "branches_lunettes",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "blanches",
        "bleues",
        "jaunes",
        "rouges",
        "vertes",
        "violettes"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qnpzx5kdglu5tvn")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("if1uvq0f")

  // remove
  collection.schema.removeField("nminso1a")

  return dao.saveCollection(collection)
})
