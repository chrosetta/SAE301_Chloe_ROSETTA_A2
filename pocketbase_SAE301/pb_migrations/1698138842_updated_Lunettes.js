/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qnpzx5kdglu5tvn")

  // remove
  collection.schema.removeField("5xlh3dyy")

  return dao.saveCollection(collection)
})
