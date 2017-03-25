/**
 * color_palette.js
 *
 * This file contains the global variables that define the color palette
 */

// primary color (indigo)
const PRIMARY_COLOR = {
  MAIN: '#3F51B5',
  LIGHT: '#9FA8DA',
  DARK: '#303F9F'
}

// secondary color (brown)
const SECONDARY_COLOR = {
  MAIN: '#795548',
  LIGHT: '#A1887F',
  DARK: '#5D4037'
}
// secondary color (green)
// {MAIN: '#2E7D32', LIGHT: '#43A047', DARK: '#1B5E20'}

// background colors
const BACKGROUND_COLOR = {
  MAIN: '#FAFAFA',
  DIALOGS: '#FFF',
  CARDS: '#FFF',
  APP_BAR: '#F5F5F5',
  STATUS_BAR: '#E0E0E0'
}

// icon color
const ICON_COLOR = {
  ACTIVE: { LIGHT: 'rgba(255, 255, 255, 1.0)', DARK: 'rgba(0, 0, 0, 0.54)'},
  INACTIVE: { LIGHT: 'rgba(255, 255, 255, 0.5)', DARK: 'rgba(0, 0, 0, 0.38)'}
}

// "OK" and "error" colors to be applied to forms after validation
const OK_COLOR = 'rgba(46, 125, 50, 0.87)'; //'#2E7D32';
const ERROR_COLOR = 'rgba(213, 0, 0, 0.87)'; //'#D50000';

global.PRIMARY_COLOR = PRIMARY_COLOR;
global.SECONDARY_COLOR = SECONDARY_COLOR;
global.BACKGROUND_COLOR = BACKGROUND_COLOR;
global.ICON_COLOR = ICON_COLOR;
global.OK_COLOR = OK_COLOR;
global.ERROR_COLOR = ERROR_COLOR;

export { PRIMARY_COLOR, SECONDARY_COLOR, BACKGROUND_COLOR, ICON_COLOR, OK_COLOR, ERROR_COLOR };
