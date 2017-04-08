import realm from '../model/realm.js';
import DEFAULT_UNITS from '../model/default_units.js';
/**
 * /service/unit.js
 *
 * This file handles all the actions related to item units (Kg, l, cups, etc.).
 */

const unitService = (() => {

  /**
   * init
   * Checks for Unit elements in the database.
   * If no Unit elements are found, sets them up.
   */
  const init = () => {
    var units = realm.objects('Unit');
    if(!units || !units.length) {
      _setupDefaultUnits();
    }
  }

  /**
   * _setupDefaultUnits
   * Sets up the default units in the database.
   * This should only be done once on the first app startup.
   */
  const _setupDefaultUnits = () => {
    realm.write(() => {
      var length = DEFAULT_UNITS.length;
      for(let i = 0; i < length; i++) {
        realm.create('Unit', DEFAULT_UNITS[i]);
      }
    });
  }

  const getAllUnits => () {
    return realm.objects('Unit');
  }

  const getUnitByName => (unit_name) {
    if(!name || typeof name !== 'string') {
      return null;
    } else {
      return getAllUnits().filtered('name == ' + unit_name);
    }
  }

  const getUnitByAbbreviation => (unit_abbreviation) {
    if(!unit_abbreviation || typeof unit_abbreviation !== 'string') {
      return null;
    } else {
      return getAllUnits().filtered('abbreviation == ' + unit_abbreviation);
    }
  }

  const getUnitsContaining => (text) {
    if(!text || typeof text !== 'string') {
      return null;
    } else {
      return getAllUnits().filtered('name CONTAINS ' + text);
    }
  }

  return {
    init: init,
    getUnitByName: getUnitByName,
    getUnitByAbbreviation: getUnitByAbbreviation,
    getUnitsContaining: getUnitsContaining
  }

})();

unitService.init();

export default unitService;
