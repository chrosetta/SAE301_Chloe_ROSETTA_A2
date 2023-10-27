/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qnpzx5kdglu5tvn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eyjzjfnb",
    "name": "field",
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

  // remove
  collection.schema.removeField("eyjzjfnb")

  return dao.saveCollection(collection)
})
