/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qnpzx5kdglu5tvn")

  // remove
  collection.schema.removeField("5xlh3dyy")

  // remove
  collection.schema.removeField("if1uvq0f")

  // remove
  collection.schema.removeField("nminso1a")

  // remove
  collection.schema.removeField("yjvjh3d4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "psy1oxwc",
    "name": "nom",
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
  const collection = dao.findCollectionByNameOrId("qnpzx5kdglu5tvn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5xlh3dyy",
    "name": "prix",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yjvjh3d4",
    "name": "verres_lunettes",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "classique",
        "anti-lumières bleues",
        "photocromatiques"
      ]
    }
  }))

  // remove
  collection.schema.removeField("psy1oxwc")

  return dao.saveCollection(collection)
})
