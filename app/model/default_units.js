/**
 * default_units.js
 * This file contains all possible units that can be recognized by the app
 */

const DEFAULT_UNITS = [
  //----- mass units -----//
  // kilogram
  { name: 'Kg', abbreviation: 'Kg' },
  { name: 'Kilos', abbreviation: 'Kg' },
  { name: 'Kilo', abbreviation: 'Kg' },
  { name: 'Kilograms', abbreviation: 'Kg' },
  { name: 'Kilogram', abbreviation: 'Kg' },
  { name: 'Kilogramos', abbreviation: 'Kg' },
  { name: 'Kilogramo',  abbreviation: 'Kg' },
  // gram
  { name: 'g', abbreviation: 'g' },
  { name: 'grams', abbreviation: 'g' },
  { name: 'gram', abbreviation: 'g' },
  { name: 'gramos', abbreviation: 'g' },
  { name: 'gramo', abbreviation: 'g' },
  // milligram
  { name: 'mg', abbreviation: 'mg' },
  { name: 'milligrams', abbreviation: 'mg' },
  { name: 'milligram', abbreviation: 'mg' },
  { name: 'miligramos', abbreviation: 'mg' },
  { name: 'miligramo', abbreviation: 'mg' },
  // ounce
  { name: 'oz', abbreviation: 'oz' },
  { name: 'ounces', abbreviation: 'oz' },
  { name: 'ounce', abbreviation: 'oz' },
  { name: 'onzas', abbreviation: 'oz' },
  { name: 'onza', abbreviation: 'oz' },
  // pound
  { name: 'lb', abbreviation: 'lb' },
  { name: 'pounds', abbreviation: 'lb' },
  { name: 'pound', abbreviation: 'lb' },
  { name: 'libras', abbreviation: 'lb' },
  { name: 'libra', abbreviation: 'lb' },


  //----- volume units -----//
  // liter
  { name: 'l', abbreviation: 'l' },
  { name: 'liters', abbreviation: 'l' },
  { name: 'liter', abbreviation: 'l' },
  { name: 'litres', abbreviation: 'l' },
  { name: 'litre', abbreviation: 'l' },
  { name: 'litros', abbreviation: 'l' },
  { name: 'litro', abbreviation: 'l' },
  // centiliter
  { name: 'cl', abbreviation: 'cl' },
  { name: 'centiliters', abbreviation: 'cl' },
  { name: 'centiliter', abbreviation: 'cl' },
  { name: 'centilitres', abbreviation: 'cl' },
  { name: 'centilitre', abbreviation: 'cl' },
  { name: 'centilitros', abbreviation: 'cl' },
  { name: 'centilitro', abbreviation: 'cl' },
  // milliliter
  { name: 'ml', abbreviation: 'ml' },
  { name: 'milliliters', abbreviation: 'ml' },
  { name: 'milliliter', abbreviation: 'ml' },
  { name: 'millilitres', abbreviation: 'ml' },
  { name: 'millilitre', abbreviation: 'ml' },
  { name: 'mililitros', abbreviation: 'ml' },
  { name: 'mililitro', abbreviation: 'ml' },
  // fluid ounce
  { name: 'fl oz' , abbreviation: 'fl oz' },
  { name: 'fl. oz.', abbreviation: 'fl oz' },
  { name: 'oz. fl.', abbreviation: 'fl oz' },
  { name: 'fluid ounces', abbreviation: 'fl oz' },
  { name: 'fluid ounce', abbreviation: 'fl oz' },
  { name: 'onzas liquidas', abbreviation: 'fl oz' },
  { name: 'onzas líquidas', abbreviation: 'fl oz' },
  { name: 'onza liquida', abbreviation: 'fl oz' },
  { name: 'onza líquida', abbreviation: 'fl oz' },
  // gallon
  { name: 'gal', abbreviation 'gal' },
  { name: 'gallons', abbreviation 'gal' },
  { name: 'gallon', abbreviation 'gal' },
  { name: 'galones', abbreviation 'gal' },
  { name: 'galon', abbreviation 'gal' },
  { name: 'galón', abbreviation 'gal' },
  // cup
  { name: 'cups', abbreviation: 'cups' },
  { name: 'cup', abbreviation: 'cup' },
  { name: 'tazas', abbreviation: 'tazas' },
  { name: 'taza', abbreviation: 'taza' },
  // teaspoon
  { name: 'tsp', abbreviation: 'tsp' },
  { name: 'teaspoons', abbreviation: 'tsp' },
  { name: 'teaspoon', abbreviation: 'tsp' },
  { name: 'cucharaditas', abbreviation: 'cucharaditas' },
  { name: 'cucharadita', abbreviation: 'cucharadita' },
  { name: 'cdtas', abbreviation: 'cdtas' },
  { name: 'cdta', abbreviation: 'cdta' },
  // tablespoon
  { name: 'tbsp', abbreviation: 'tbsp' },
  { name: 'tablespoons', abbreviation: 'tbsp' },
  { name: 'tablespoon', abbreviation: 'tbsp' },
  { name: 'cucharadas', abbreviation: 'cucharadas' },
  { name: 'cucharada', abbreviation: 'cucharada' },
  { name: 'cdas', abbreviation: 'cdas' },
  { name: 'cda', abbreviation: 'cda' },
  //pint
  { name: 'pints', abbreviation: 'pints' },
  { name: 'pint', abbreviation: 'pint' },
  { name: 'pt', abbreviation: 'pt' },
  { name: 'p', abbreviation: 'p' },
  { name: 'pintas', abbreviation: 'pintas' },
  { name: 'pinta', abbreviation: 'pinta' },

  //----- Other types of units -----//
  // unit
  { name: 'units', abbreviation: '' },
  { name: 'unit', abbreviation: '' },
  { name: 'unidades', abbreviation: '' },
  { name: 'unidad', abbreviation: '' },
  // can or tin
  { name: 'cans', abbreviation: 'cans' },
  { name: 'can', abbreviation: 'can' },
  { name: 'latas', abbreviation: 'lata' },
  { name: 'lata', abbreviation: 'lata' },
  { name: 'tins', abbreviation: 'tins' },
  { name: 'tin', abbreviation: 'tin' },
  // box
  { name: 'boxes', abbreviation: 'boxes' },
  { name: 'box', abbreviation: 'box' },
  { name: 'cajas', abbreviation: 'cajas' },
  { name: 'caja', abbreviation: 'caja' },
  // container
  { name: 'containers', abbreviation: 'containers' },
  { name: 'container', abbreviation: 'container' },
  { name: 'contenedores', abbreviation: 'contenedores' },
  { name: 'contenedor', abbreviation: 'contenedor' },
  // bag
  { name: 'bags', abbreviation: 'bags' },
  { name: 'bag', abbreviation: 'bag' },
  { name: 'bolsas', abbreviation: 'bolsas' },
  { name: 'bolsa', abbreviation: 'bolsa' },
  // loaf
  { name: 'loaves', abbreviation: 'loaves' },
  { name: 'loaf', abbreviation: 'loaf' },
  { name: 'barras', abbreviation: 'barras' },
  { name: 'barra', abbreviation: 'barra' },
  // bunch
  { name: 'bunches', abbreviation: 'bunches' },
  { name: 'bunch', abbreviation: 'bunch' },
  { name: 'ramos', abbreviation: 'ramos' },
  { name: 'ramo', abbreviation: 'ramo' },
  // bottle
  { name: 'bottles', abbreviation: 'bottles' },
  { name: 'bottle', abbreviation: 'bottle' },
  { name: 'botellas', abbreviation: 'botellas' },
  { name: 'botella', abbreviation: 'botella' },
  { name: 'botellines', abbreviation: 'botellines' },
  { name: 'botellin', abbreviation: 'botellín' },
  { name: 'botellín', abbreviation: 'botellín' },
  // carton
  { name: 'cartons', abbreviation: 'carton' },
  { name: 'carton', abbreviation: 'carton' },
  { name: 'cartones', abbreviation: 'cartones' },
  { name: 'cartón', abbreviation: 'cartón' },
  { name: 'bricks', abbreviation: 'bricks' },
  { name: 'brick', abbreviation: 'brick' },
  { name: 'tetrabricks', abbreviation: 'tetrabricks' },
  { name: 'tetrabrick', abbreviation: 'tetrabrick' },
  // jar
  { name: 'jars', abbreviation: 'jars' },
  { name: 'jar', abbreviation: 'jar' },
  { name: 'frascos', abbreviation: 'frascos' },
  { name: 'frasco', abbreviation: 'frasco' },
  { name: 'tarros', abbreviation: 'tarros' },
  { name: 'tarro', abbreviation: 'tarro' },
  { name: 'botes', abbreviation: 'botes' },
  { name: 'bote', abbreviation: 'bote' },
  // roll
  { name: 'rolls', abbreviation: 'rolls' },
  { name: 'roll', abbreviation: 'roll' },
  { name: 'rollos', abbreviation: 'rollos' },
  { name: 'rollo', abbreviation: 'rollo' },
  // fillet
  { name: 'fillets', abbreviation: 'fillets' },
  { name: 'fillet', abbreviation: 'fillet' },
  { name: 'filetes', abbreviation: 'filetes' },
  { name: 'filete', abbreviation: 'filete' },
  // slice
  { name: 'slices', abbreviation: 'slices' },
  { name: 'slice', abbreviation: 'slice' },
  { name: 'rebanadas', abbreviation: 'rebanadas' },
  { name: 'rebanada', abbreviation: 'rebanada' },
  { name: 'laminas', abbreviation: 'láminas' },
  { name: 'láminas', abbreviation: 'láminas' },
  { name: 'lamina', abbreviation: 'lámina' },
  { name: 'lámina', abbreviation: 'lámina }'
];

export default DEFAULT_UNITS;
