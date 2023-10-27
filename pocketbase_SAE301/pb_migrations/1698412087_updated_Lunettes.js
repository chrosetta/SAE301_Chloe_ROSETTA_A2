/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qnpzx5kdglu5tvn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iki8csyz",
    "name": "relation_materiel",
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
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lu4j9xog",
    "name": "relation_couleur",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "2uevx9e9w9ztr33",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qnpzx5kdglu5tvn")

  // remove
  collection.schema.removeField("iki8csyz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lu4j9xog",
    "name": "relation",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "2uevx9e9w9ztr33",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
