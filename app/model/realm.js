/**
 * realm_schemas.js
 *
 * This file defines the schemas for the local database used in the app
 */

//----- Unit -----//
const UnitSchema = {
  name: 'Unit',
  primaryKey: 'name',
  properties: {
    name: 'string',
    abbreviation: 'string'
  }
};

//----- Item category (example: fruit & vegetables, drinks, etc.) -----//
const ItemCategorySchema = {
  name: 'ItemCategory',
  primaryKey: 'id',
  properties: {
    id: 'int',
    en: 'string', // english translation
    es: 'string', // spanish translation
    image: 'string'
  }
}

//----- Item (example: tomato, tonic water, etc.) -----//
const ItemSchema = {
  name: 'Item',
  primaryKey: 'name',
  properties: {
    name: 'string',
    en: 'string', // english translation
    es: 'string', // spanish translation
    category: 'ItemCategory'
  }
}

//----- Grocery list item (example: 2 Kg of tomatoes, 1l of tonic water, etc.) -----//
const GroceryListItemSchema = {
  name: 'GroceryListItem',
  properties: {
    item: 'Item',
    quantity: 'float',
    unit: 'Unit'
  }
}

//----- Grocery List (contains a list of items and a list of checked items) -----//
const GroceryListSchema = {
  name: 'GroceryList',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    items: {type: 'list', objectType: 'GroceryListItem'},
    checkedItems: {type: 'list', objectType: 'GroceryListItem'}
  }
}

//----- Translation -----//
const TranslationSchema = {
  name: 'Translation',
  primaryKey: 'id'
  properties: {
    id: 'string',
    en: 'string', // english
    es: 'string'  // spanish
  }
}

export default new Realm({
  schema: [
    UnitSchema,
    ItemCategorySchema,
    ItemSchema,
    GroceryListItemSchema,
    GroceryListSchema,
    TranslationSchema
  ]
});
